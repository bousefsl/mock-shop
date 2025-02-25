import { Outlet } from "react-router-dom";
//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MiniBasket from "../components/MiniBasket";
import { useMiniBasketOverlay } from "../components/context/productContext";

export default function RootLayout() {

  const { isOpenValue } = useMiniBasketOverlay();

  return (
    <div className="root-layout">
        <MiniBasket isOpenValue={isOpenValue} />
        <Navbar />
        
        <main>
            <div className='main-container' aria-label='Main Content Area'>
              <Outlet />
            </div>
        </main>
        <Footer />
    </div>
  )
}
