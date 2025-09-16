import { createBrowserRouter } from "react-router";
import App from "./components/MainPage.jsx";
import ShopItems from "./components/Shop.jsx";
import Cart from "./components/CartPage.jsx";
import Checkout from "./components/Checkout.jsx";
import "./style.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <ShopItems />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);
