import { useState, useEffect } from "react";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODQ1YzI1MDVjMDllN2ViMWY2Mzk3MjE3NThhNWE4OCIsIm5iZiI6MTc1NzcyNTg4My45MzgsInN1YiI6IjY4YzRjNGJiYjM2ZDI1ZDI3ZjU1MWE0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8c0is-WswSTnyjn_Ewef7Vj2pBpsH3If3-SW0IjvE7I",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options,
    )
      .then((res) => {
        if (res.status > 400) {
          throw new Error("error fetching the API");
        }
        return res.json();
      })
      .then((res) => setMovies(res))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { movies, error, loading };
};
