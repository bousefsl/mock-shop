import { Link } from "react-router-dom";
import { useBasket } from "./context/productContext"
import { BasketItem } from "../vite-env";

export default function MiniBasket() {

    const {basket} = useBasket();

    

  return (
    <div className="mini-basket">
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
        <div className="d-flex flex-row mb-3">
            <div>Img</div>
            <div>Title</div>
        </div>
        <div>
            <Link to='basket' className="btn btn-secondary d-block mb-3">View Basket</Link>
            <Link to='#' className="btn btn-primary d-block mb-3">Go to checkout</Link>
            <Link to='products' className="d-block text-center">Continue Shopping</Link>
        </div>
    </div>
  )
}
