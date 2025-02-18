import { ChangeEvent, FormEvent, useState } from "react";
import { useLoaderData } from "react-router-dom";
//Types
import { BasketItem, ItemParams } from "../vite-env";
//Context
import { useBasket } from "../components/context/productContext";
//Utilities
import formatCurrency from "../utilities/formatCurrency";

interface ProductItemProps {
  data: {
    product: Product;
  }
}

interface Product {
    id: string;
    title:string;
    description: string;
    featuredImage: FeatImg;
    variants: {
      edges: Array<InnerNode>;
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

  const { basket, addItemToBasket, basketQuantity, updateBasketItemQuantity, openBasket } = useBasket();

  //State created for the new item to be added
  const [newItem, setNewItem] = useState<BasketItem>({
    //The "id" in the requested data is gid://shopify/Product/7982853619734 (for e.g)
    //We want the unique number on the end for our id when placed in the basket
    id: parseInt((loadeddata.data.product.id).substring((loadeddata.data.product.id).lastIndexOf('/') + 1)),
    title: loadeddata.data.product.title,
    image: loadeddata.data.product.featuredImage.url,
    amount: loadeddata.data.product.variants.edges[0].node.price.amount,
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

    //Check to see if our basket has any quantity, therefore item(s)
    //If we can't find our basket item to be added, add it OR
    //we have the item in our basket already, so update the quantity instead
    if (basketQuantity > 0) {
      const basketItem = basket.find(item => item.id === newItem.id);
      if (basketItem === undefined) {
        addItemToBasket(newItem);
      } else {
        updateBasketItemQuantity(basketItem.id, basketItem.quantity + newItem.quantity)
      }
    } else {
      addItemToBasket(newItem);
    }
    
    openBasket();
  }

  return (
    <div className="product-item">
      <div className="row">
        <div className="col-md-7">
          <div>
            <img src={loadeddata.data.product.featuredImage.url} alt={loadeddata.data.product.title} width="100%" height="100%" />
          </div>
        </div>
        <div className="col-md-5">
          <div className="border border-1 border-dark border-opacity-25 mt-5 p-5 rounded-4 bg-white shadow">
            <h1 className="h2">{loadeddata.data.product.title}</h1>
            <p className="h5">{formatCurrency(loadeddata.data.product.variants.edges[0].node.price.amount)}</p>

            <form className="form mb-5">
              <div className="mb-4">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input type="number" className="form-control" id="quantity"  name="quantity" min="1" onChange={handleInputChange} />
              </div>
              <button type="submit" className="btn btn-primary" disabled={newItem.quantity === 0 ? true : false} onClick={handleAddItem}>Add to Basket</button>
            </form>

            <p>{loadeddata.data.product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const productItemLoader = async( { params } : { params:any } ) => {
  //For the "params" object, we declare the type as "any"
  
  //We want to fetch a single product, the params property contains in-route parameters which we can destructure
  //Here, params is {handle: 'slides'} for example  -- ("handle" used as our Route Parameter in App.tsx)
  //When destructured, we'll get 'slides' which we can use in our request below
  const { handle } = params as ItemParams;

  //Get the products from the mock.shop API
  const request = await fetch(`https://mock.shop/api?query={product(handle:%20%22${handle}%22){id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}`);    

  if (!request.ok) {
      throw Error('Could not fetch the product item');
  }
  
  return request.json()       //React-router will get our data so we can use it above
}