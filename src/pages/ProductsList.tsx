import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
//Types
import { ProductProps } from "../vite-env";
//Utilities
import formatCurrency from "../utilities/formatCurrency";

export default function ProductsList() {

  const loadeddata = useLoaderData() as ProductProps;
  //console.log(loadeddata);

  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    setProducts(loadeddata.data.products.edges);
  }, [])

  return (
    <div className="product-list">
      <h1>Our Products</h1>

      <section className="section-spacer-top section-spacer-bottom">
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-5 gy-5">

           {products.map((product, index) => (
              
                <div className="col" key={index}>

                  <Link to={product.node.handle} className="product-link">
                    <div className="card h-100 card-transparent border border-0">
                      <img src={product.node.featuredImage.url} className="card-img-top" alt={product.node.title} />
                      <div className="card-body">
                        <p className="card-product-title">{product.node.title}</p>
                        <p className="card-product-price">{formatCurrency(product.node.variants.edges[0].node.price.amount)}</p>
                      </div>
                    </div>
                  </Link>

                </div>
              
            ))}

          </div>
        </div>
      </section>
      
    </div>
  )
}


//Loader function
export const productsLoader = async() => { 
  
  //Get the products from the mock.shop API
  const request = await fetch('https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20handle%20description%20featuredImage%20{id%20url}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}');      

  if (!request.ok) {
      throw Error('Could not fetch the products');
  }

  return request.json()       //React-router will get our data so we can use it above
}