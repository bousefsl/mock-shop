import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
        <main>
            <div className='main-container' aria-label='Main Content Area'>
                <Outlet />
            </div>
        </main>
    </div>
  )
}
