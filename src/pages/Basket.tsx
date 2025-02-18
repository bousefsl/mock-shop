import { Link } from "react-router-dom";
//Context
import { useBasket } from "../components/context/productContext";
//Utilities
import formatCurrency from "../utilities/formatCurrency";

export default function Basket() {

  const {basket, updateBasketItemQuantity, removeItemFromBasket, getBasketTotal, basketQuantity} = useBasket();

  return (
    <div className="container-xxl mt-5">
      <div className="row">
        <div className="col-12">
          <div className="basket">
            <div className="title-with-link">
              <h1 className="me-4 mb-3 mb-sm-0">Your Basket</h1>
              <Link to='/products'>Continue Shopping</Link>
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
                                onClick={() => updateBasketItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1 ? true : false}>
                                -
                              </button>
                              <span className="mx-2">{item.quantity}</span>
                              <button type="button" className="btn btn-secondary btn-sm btn-quantity" onClick={() => updateBasketItemQuantity(item.id, item.quantity + 1)}>
                                +
                              </button>
                            </p>
                          </div>
                          <div className="basket-price ms-auto">
                            <p className="h5 text-end">{formatCurrency(item.amount * item.quantity)}</p>
                            <p className="text-end">
                              <button type="button" className="btn btn-secondary btn-sm btn-quantity" onClick={() => removeItemFromBasket(item.id)}>Remove</button>
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  )
              })}
            </div>

            {
              basketQuantity > 0 ? (
                <div className="text-end">
                  <p className="h5 mb-2">
                    <span className="me-2 fw-bold">Total:</span><span>{formatCurrency(getBasketTotal())}</span>
                  </p>
                </div>
              ) : (
                <div className="text-center border border-dark-subtle rounded p-4">
                  <p className="h3 mb-0">Your basket is empty</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
