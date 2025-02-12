import { useLoaderData, useParams } from "react-router-dom";

export default function Product() {
  const { title } = useParams();
  const loadeddata = useLoaderData();

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
            <p className="h5">{`£${loadeddata.data.products.edges[0].node.variants.edges[0].node.price.amount}0 CAD`}</p>
            <form className="form mb-5">
              <div className="mb-4">
                <input type="number" id="item-amount"  name="quantity" min="1" value="1" />
              </div>
              <button type="submit" className="btn btn-primary">Add to Basket</button>
            </form>
            <p>{loadeddata.data.products.edges[0].node.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const productItemLoader = async( { params } ) => {
  
  const { title } = params;

  //Get the products from the mock.shop API
  const request = await fetch('https://mock.shop/api?query={products(first:%201,%20query:%20%22title:'+title+'%22){edges%20{node%20{title%20description%20featuredImage%20{id%20url}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}');      

  if (!request.ok) {
      throw Error('Could not fetch the product item');
  }
  
  return request.json()       //React-router will get our data so we can use it above
}