import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
//Layouts
import RootLayout from "./layouts/RootLayout";
//Pages
import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";
import Basket from "./pages/Basket";
import About from "./pages/About";


//Create the page router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout /> }>
      <Route index element={ <Home /> }></Route>
      <Route path="products" element={ <ProductsList /> }></Route>
      <Route path="about" element={ <About /> }></Route>
      <Route path="item" element={ <Product /> }></Route>
      <Route path="basket" element={ <Basket /> }></Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App