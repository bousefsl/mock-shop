import { ChangeEvent, FormEvent, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BasketItem, ItemParams } from "../vite-env";
import { useBasket } from "../components/context/productContext";

interface ProductItemProps {
  data: {
    products: {
      edges: Array<Node>
    }
  }
}

interface Node {
  node: {
    id: string;
    title:string;
    description: string;
    featuredImage: FeatImg;
    variants: {
      edges: Array<InnerNode>;
    }
  }
}

interface InnerNode {
  node: {
    price: Price;
  }
}

interface FeatImg {
  id:string;
  url:string;
}

interface Price {
  amount: number;
  currencyCode: string;
}

export default function Product() {

  const loadeddata = useLoaderData() as ProductItemProps;

  const { addItemToBasket } = useBasket();

  //State created for the new item to be added
  const [newItem, setNewItem] = useState<BasketItem>({
    id: Math.floor(Math.random() * 1000),
    title: loadeddata.data.products.edges[0].node.title,
    image: loadeddata.data.products.edges[0].node.featuredImage.url,
    amount: loadeddata.data.products.edges[0].node.variants.edges[0].node.price.amount,
    quantity: 0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItem({
      ...newItem,
      [e.currentTarget.id]: parseInt(e.currentTarget.value),
    })
  }

  const handleAddItem = (e: FormEvent) => {
    e.preventDefault();

    addItemToBasket(newItem);
  }

  return (
    <div className="product-item">
      <div className="row">
        <div className="col-md-7">
          <div>
            <img src={loadeddata.data.products.edges[0].node.featuredImage.url} alt={loadeddata.data.products.edges[0].node.title} width="100%" height="100%" />
          </div>
        </div>
        <div className="col-md-5">
          <div className="border border-1 border-dark border-opacity-25 mt-5 p-5 rounded-4 bg-white shadow">
            <h1 className="h2">{loadeddata.data.products.edges[0].node.title}</h1>
            <p className="h5">£{loadeddata.data.products.edges[0].node.variants.edges[0].node.price.amount}0 CAD</p>

            <form className="form mb-5">
              <div className="mb-4">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input type="number" className="form-control" id="quantity"  name="quantity" min="1" onChange={handleInputChange} />
              </div>
              <button type="submit" className="btn btn-primary" disabled={newItem.quantity === 0 ? true : false} onClick={handleAddItem}>Add to Basket</button>
            </form>

            <p>{loadeddata.data.products.edges[0].node.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const productItemLoader = async( { params } : { params:any } ) => {
  //For the "params" object, we declare the type as "any"
  
  //We want to fetch a single product, the params property contains in-route parameters which we can destructure
  //Here, params is {title: 'Slides'} for example  -- ("title" used as our Route Parameter in App.tsx)
  //When destructured, we'll get 'Slides' which we can use in our request below
  const { title } = params as ItemParams;

  //Get the products from the mock.shop API
  const request = await fetch(`https://mock.shop/api?query={products(first:%201,%20query:%20%22title:${title}%22){edges%20{node%20{title%20description%20featuredImage%20{id%20url}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}`);      

  if (!request.ok) {
      throw Error('Could not fetch the product item');
  }
  
  return request.json()       //React-router will get our data so we can use it above
}