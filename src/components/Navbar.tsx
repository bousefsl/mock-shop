import { Link, NavLink } from "react-router-dom";
//Components
import MiniBasket from "./MiniBasket";
//Context
import { useBasket } from "./context/productContext";
//Types
import { NavBarProps } from "../vite-env";

export default function Navbar({isOpenValue}:NavBarProps) {

    const { basketQuantity, closeBasket, openBasket } = useBasket();

  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
        <div className="container-fluid">

            <button className="navbar-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <Link to='/' className="navbar-brand">Mock Shop</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/products' className="nav-link">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/about' className="nav-link">About</NavLink>
                    </li>
                </ul>
            </div>

            <div className="dropdown basket-btn">
                <div className="mini-basket-wrapper">
                    <button type="button" className={isOpenValue ? 'dropdown-toggle show' : 'dropdown-toggle'} data-bs-toggle="dropdown" aria-expanded={isOpenValue ? 'true' : 'false'} data-bs-auto-close="false" onClick={() => {isOpenValue ? closeBasket() : openBasket()}}>
                        <div className="basket-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                        <span className="visually-hidden">View Basket</span>
                        <div className="rounded-circle">{basketQuantity}</div>
                    </button>
                    <div className={isOpenValue ? 'dropdown-menu dropdown-menu-end show' : 'dropdown-menu dropdown-menu-end'}
                    data-bs-popper={isOpenValue ? 'static' : ''}>
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => {closeBasket()}}></button>
                        <MiniBasket />
                    </div>
                </div>
            </div>
            
        </div>
        
    </nav>
  )
}
