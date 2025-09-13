import { createBrowserRouter } from "react-router";
import App from "./components/MainPage.jsx";
import ShopItems from "./components/Shop.jsx";
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
]);
