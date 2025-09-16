import { useState } from "react";
import { MoviesContext } from "./MoviesContext.jsx";
import { useFetchMovies } from "../components/Fetch.jsx";

export const MoviesProvider = ({ children }) => {
  const [xd, setXD] = useState([]);
  const [cartXXD, setcartXXD] = useState(0);

  return (
    <MoviesContext.Provider value={{ xd, cartXXD }}>
      {children}
    </MoviesContext.Provider>
  );
};
