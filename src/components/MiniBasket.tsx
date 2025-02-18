import { Link } from "react-router-dom";
import { useBasket } from "./context/productContext";
import formatCurrency from "../utilities/formatCurrency";

export default function MiniBasket() {

    const { basket } = useBasket();

  return (
    <div className="mini-basket" role="menu">
        <div>
            <p className="fw-semibold">
                <span className="icon icon-sm me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tick-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </span>
                Your item has been added
            </p>
        </div>
        <div className="mini-basket-items mb-3">
            {basket.map((item, index) => {
                return (
                    <div className="d-flex flex-row mb-4" key={index}>
                        <div className="mini-basket-img me-3">
                            <img src={item.image} alt={item.title} width="75px" />
                        </div>
                        <div>
                            <p className="fs-6 text fw-bold mb-0">{item.title}</p>
                            <p className="fw-medium text-muted small mb-0">Quantity: {item.quantity}</p>
                            <p className="fw-medium">{formatCurrency(item.amount)}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div>
            <Link to='basket' className="btn btn-secondary d-block mb-3">View Basket</Link>
            <Link to='#' className="btn btn-primary d-block mb-3">Go to checkout</Link>
            <Link to='products' className="d-block text-center">Continue Shopping</Link>
        </div>
    </div>
  )
}
