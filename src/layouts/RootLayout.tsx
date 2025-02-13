import { Outlet } from "react-router-dom";
//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
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
