import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
//Layouts
import RootLayout from "./layouts/RootLayout";
import ProductsLayout from "./layouts/ProductsLayout";
//Pages
import Home from "./pages/Home";
import ProductsList, { productsLoader } from "./pages/ProductsList";
import Product, { productItemLoader } from "./pages/Product";
import Basket from "./pages/Basket";
import About from "./pages/About";


//Create the page router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout /> }>
      <Route index element={ <Home /> }></Route>
      <Route path="products" element={ <ProductsLayout /> }>

        <Route index element={ <ProductsList /> } loader={ productsLoader }/>
        <Route path=":title" element={ <Product /> } loader={ productItemLoader }/>

      </Route>
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