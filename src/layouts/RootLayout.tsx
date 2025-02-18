import { Outlet } from "react-router-dom";
//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//Context
import { useBasket } from "../components/context/productContext";

export default function RootLayout() {

  const { isOpenValue } = useBasket();

  return (
    <div className="root-layout">
        <Navbar isOpenValue={isOpenValue} />
        <main>
            <div className='main-container' aria-label='Main Content Area'>
              <Outlet />
            </div>
        </main>
        <Footer />
    </div>
  )
}
