import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ProductProps {
  node: {
    id: string;
    title:string;
    description: string;
    featuredImage: {
      id:string;
      url:string;
    }
    variants: {
      edges: any;
      node: {
        price: {
          amount: number;
          currencyCode: string;
        }
      }
    }
  }
}

export default function ProductsList() {

  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  {/*Get the products from the mock.shop API*/}

  useEffect(() => {
    const fetchProducts = async () => {
      const request = await fetch('https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}', {
        method: "GET"
      });
      if (!request.ok) {
        setIsLoading(false);
        throw new Error('Could not fetch the data for that resource');
      }
      const response = await request.json();
      setIsLoading(false);
      setProducts(response.data.products.edges);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Our Products</h1>

      {isLoading && <div className="d-block text-center h3">Loading...</div> }      {/*If "isLoading" is true, output "Loading" */}

      <section className="section-spacer-top section-spacer-bottom">
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-5 gy-5">

            {!isLoading && products.map((product, index) => (
              <>
                <div className="col" key={index}>

                  <Link to='/' className="product-link">
                    <div className="card h-100 card-transparent border border-0">
                      <img src={product.node.featuredImage.url} className="card-img-top" alt={product.node.title} />
                      <div className="card-body">
                        <p className="card-product-title">{product.node.title}</p>
                        <p className="card-product-price">{`£${product.node.variants.edges[0].node.price.amount}0 CAD`}</p>
                      </div>
                    </div>
                  </Link>

                </div>
              </>
            ))}

          </div>
        </div>
      </section>
      
    </div>
  )
}
