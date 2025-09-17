import { MoviesContext } from "./MoviesContext.jsx";
import { useFetchMovies } from "../components/Fetch.jsx";

export const MoviesProvider = ({ children }) => {
  const { movies, error, loading } = useFetchMovies();

  return (
    <MoviesContext.Provider
      value={{
        movies,
        error,
        loading,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
