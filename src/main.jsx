import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import App from "./components/MainPage.jsx";
import { router } from "./routes.jsx";
import { MoviesProvider } from "./context/MoviesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MoviesProvider>
      <RouterProvider router={router} />
    </MoviesProvider>
  </StrictMode>,
);
