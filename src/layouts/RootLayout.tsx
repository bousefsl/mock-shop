import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="root-layout">
        <Navbar />
        <main>
            <div className='main-container' aria-label='Main Content Area'>
                <div className="container-xxl mt-5">
                  <div className="row">
                    <div className="col-12">
                      <Outlet />
                    </div>
                  </div>
                </div>
            </div>
        </main>
    </div>
  )
}
