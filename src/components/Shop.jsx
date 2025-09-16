import { Header, Footer } from "./FooterHeader.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import wstar from "../assets/Starwhite.png";

const posterUrl = "https://image.tmdb.org/t/p/original";

export default function ShopItems() {
  const { movies, error, loading } = useFetchMovies();
  const [items, setItems] = useState([]);
  const [cartitems, setCartItems] = useState(0);

  useEffect(() => {
    const citems = [];
    for (let i = 0; i < 20; i++) {
      citems[i] = 0;
    }
    setItems(citems);
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <main>
          <p>Cargando...</p>
        </main>
      ) : (
        <main>
          <h1>Catalogue of movies.</h1>
          <ul className="grid grid-cols-4">
            {movies.results.map((movie, index) => (
              <li key={index}>
                <ItemCard
                  poster={movie.poster_path}
                  name={movie.original_title}
                  points={movie.vote_average}
                  items={items}
                  setItems={setItems}
                  position={index}
                  cartitems={cartitems}
                  setCartItems={setCartItems}
                />
              </li>
            ))}
          </ul>
        </main>
      )}

      <Footer />
    </div>
  );
}

export function ItemCard({
  poster,
  name,
  points,
  items,
  setItems,
  position,
  cartitems,
  setCartItems,
}) {
  function handleAddItems(e) {
    e.preventDefault();
    let citems = [...items];
    citems[position] += 1;
    setItems(citems);
  }

  function handleDeleteItems(e) {
    e.preventDefault();
    let citems = [...items];
    citems[position] -= 1;
    setItems(citems);
  }

  function handleAddtoCart(e) {
    e.preventDefault();
  }
  return (
    <div className="flex h-80 w-40 flex-col gap-3 border-1 bg-stone-700">
      <Link to="/" className="flex justify-center">
        <img src={posterUrl + poster} alt="no hay img" className="h-40" />
      </Link>

      <div className="flex flex-row gap-5">
        <h2>{name}</h2>
        <div className="flex">
          <p>{points}/10</p>
          <img src={wstar} alt="no hay img" className="size-6" />
        </div>
      </div>
      <p>$10,99</p>
      <div className="flex items-center gap-5">
        <button className="cursor-pointer bg-amber-400 text-xs">
          Add to cart
        </button>
        <button
          className="cursor-pointer"
          onClick={(e) => handleDeleteItems(e)}
        >
          -
        </button>
        <p>{items[position]}</p>
        <button className="cursor-pointer" onClick={(e) => handleAddItems(e)}>
          +
        </button>
      </div>
    </div>
  );
}
