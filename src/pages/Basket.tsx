import { Link } from "react-router-dom";
import { useBasket } from "../components/context/productContext";

export default function Basket() {

  const {basket, updateBasketItemQuantity, removeItemFromBasket} = useBasket();

  return (
    <div className="container-xxl mt-5">
      <div className="row">
        <div className="col-12">
          <div className="basket">
            <div className="d-flex">
              <div className="me-sm-auto">
                <h1>Basket Page</h1>
              </div>
              <div className="align-self-center">
                <Link to='/products'>Continue Shopping</Link>
              </div>
            </div>

            <div className="basket">
              {basket.map((item, index) => {
                  return (
                    <div className="basket-item" key={index}>
                      <div className="d-flex flex-column flex-sm-row">
                        <div className="basket-img mb-4 mb-sm-0">
                          <img src={item.image} alt={item.title} />
                        </div>

                        <div className="d-flex flex-row flex-grow-1">
                          <div className="basket-details">
                            <p className="h5">{item.title}</p>
                            <p className="">
                              <button type="button" className="btn btn-secondary btn-sm btn-quantity" 
                                onClick={() => updateBasketItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 0 ? true : false}>
                                -
                              </button>
                              <span className="mx-2">{item.quantity}</span>
                              <button type="button" className="btn btn-secondary btn-sm btn-quantity" onClick={() => updateBasketItemQuantity(item.id, item.quantity + 1)}>
                                +
                              </button>
                            </p>
                          </div>
                          <div className="basket-price ms-auto">
                            <p className="h5">{`£${item.price}0 CAD`}</p>
                            <p className="text-end">
                              <button type="button" className="btn btn-secondary btn-sm btn-quantity" onClick={() => removeItemFromBasket(item.id)}>Remove</button>
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  )
              })}
              <div className="text-end">
                <p className="h5 mb-2">Total:</p>
                <p>(Total here)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
