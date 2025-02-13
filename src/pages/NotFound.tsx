import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-xxl mt-5">
      <div className="row">
        <div className="col-12">
          <div className="not-found">
              <p className="h3">Oops! The page you're looking for does not exist.</p>
              <p>
                  <Link to='/' className="btn btn-primary">Go to homepage</Link>
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}
