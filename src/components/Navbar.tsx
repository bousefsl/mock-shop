import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
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
                <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    <span className="basket-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    </span>
                    <span className="visually-hidden">View Basket</span>
                </button>
                <div className="dropdown-menu dropdown-menu-end p-4">
                    <p>Product List here</p>
                    <Link to='/'>Go to Basket</Link>
                </div>
            </div>
            
        </div>
        
    </nav>
  )
}
