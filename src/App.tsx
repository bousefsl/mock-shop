import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
//Layouts
import RootLayout from "./layouts/RootLayout";
import ProductsLayout from "./layouts/ProductsLayout";
//Components
import LazyLoadingMsg from "./components/LazyLoadingMsg";
//Pages
import Home from "./pages/Home";
import { productsLoader } from "./pages/ProductsList";
import { productItemLoader } from "./pages/Product";
import Basket from "./pages/Basket";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProductError from "./pages/ProductError";
//Context
import { BasketProvider } from "./components/context/productContext";

//Lazy-loaded components
const ProductsList = lazy(() => import('./pages/ProductsList'));
const Product = lazy(() => import('./pages/Product'));

//Create the page router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout /> }>
      <Route index element={ <Home /> }></Route>

      <Route path="products" element={ <ProductsLayout /> } errorElement={ <ProductError /> }>
        <Route index element={ 
          <Suspense fallback={ <LazyLoadingMsg /> }>
            <ProductsList />
          </Suspense> 
        } loader={ productsLoader }/>
        {/* ":handle" is the "changeable" part of the Route, the "Route Parameter" */}
        <Route path=":handle" element={ 
          <Suspense fallback={ <LazyLoadingMsg /> }>
            <Product /> 
          </Suspense>
        } loader={ productItemLoader }/>
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