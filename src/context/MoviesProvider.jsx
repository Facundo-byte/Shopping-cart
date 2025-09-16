import { useState, useEffect } from "react";
import { MoviesContext } from "./MoviesContext.jsx";
import { useFetchMovies } from "../components/Fetch.jsx";

export const MoviesProvider = ({ children }) => {
  const { movies, error, loading } = useFetchMovies();
  const [items, setItems] = useState([{ value: 0, buyed: false, cart: 0 }]);
  const [cartitems, setCartItems] = useState(0);

  useEffect(() => {
    const citems = Array.from({ length: 20 }, () => ({
      shop: 1,
      buyed: false,
      cart: 0,
    }));
    setItems(citems);
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        error,
        loading,
        items,
        setItems,
        cartitems,
        setCartItems,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
