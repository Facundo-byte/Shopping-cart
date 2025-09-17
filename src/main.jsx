import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes.jsx";
import { MoviesProvider } from "./context/MoviesProvider.jsx";
import { ItemsProvider } from "./context/ItemsProvider.jsx";
import { DarkmodeProvider } from "./context/DarkmodeProvider.jsx";

export function AppProvider({ children }) {
  return (
    <MoviesProvider>
      <DarkmodeProvider>
        <ItemsProvider>{children}</ItemsProvider>
      </DarkmodeProvider>
    </MoviesProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
);
