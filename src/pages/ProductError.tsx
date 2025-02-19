import { Link, useRouteError } from "react-router-dom"

export default function ProductError() {
    const error:unknown = useRouteError();      //A hook that react-router gives to us to throw errors

  return (
    <div className="careers-error">
        <div className="container-xxl mt-5">
          <div className="row">
            <div className="col-12"></div>

            <h1>Oops! An unexpected error has occurred.</h1>
            <p>{(error as Error)?.message || (error as { statusText?: string })?.statusText}</p>

            <p><Link to="/" className="btn btn-primary">Back to the Homepage</Link></p>

          </div>
        </div>
    </div>
  )
}