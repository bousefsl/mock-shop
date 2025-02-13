import { Link, useRouteError } from "react-router-dom"

export default function ProductError() {
    const error:unknown = useRouteError();      //A hook that react-router gives to us to throw errors

  return (
    <div className="careers-error">
        <h2>Error</h2>
        <p>{error.message}</p>

        <Link to="/" className="btn btn-primary">Back to the Homepage</Link>
    </div>
  )
}