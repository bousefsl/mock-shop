import { Outlet } from "react-router-dom";


export default function ProductsLayout() {
  return (
    <div className="container-xxl mt-5">
      <div className="row">
        <div className="col-12">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
