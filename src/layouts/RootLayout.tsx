import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function RootLayout() {
  return (
    <div className="root-layout">
        <Navbar />
        <main>
            <div className='main-container' aria-label='Main Content Area'>
                <Outlet />
            </div>
        </main>
    </div>
  )
}
