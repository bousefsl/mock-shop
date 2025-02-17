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
import NotFound from "./pages/NotFound";
import ProductError from "./pages/ProductError";
import { BasketProvider } from "./components/context/productContext";
//Context



//Create the page router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout /> }>
      <Route index element={ <Home /> }></Route>
      <Route path="products" element={ <ProductsLayout /> } errorElement={ <ProductError /> }>

        <Route index element={ <ProductsList /> } loader={ productsLoader }/>
        {/* ":title" is the "changeable" part of the Route, the "Route Parameter" */}
        <Route path=":title" element={ <Product /> } loader={ productItemLoader }/>

      </Route>
      <Route path="about" element={ <About /> }></Route>
      <Route path="basket" element={ <Basket /> }></Route>

      <Route path="*" element={ <NotFound /> }></Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <BasketProvider>
        <RouterProvider router={router} />
      </BasketProvider>  
    </>
  )
}

export default App