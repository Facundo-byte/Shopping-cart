import { Header, Footer } from "./FooterHeader.jsx";
import { useContext } from "react";
import { Link } from "react-router";
import wstar from "../assets/Starwhite.png";
import { MoviesContext } from "../context/MoviesContext.jsx";

const posterUrl = "https://image.tmdb.org/t/p/original";

export default function ShopItems() {
  const { movies, error, loading, items, setItems, cartitems, setCartItems } =
    useContext(MoviesContext);

  if (error) {
    return <p>hubo un error</p>;
  }

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
                  name={movie.title}
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
    citems[position].shop += 1;
    citems[position].buyed = false;
    setItems(citems);
  }

  function handleDeleteItems(e) {
    e.preventDefault();
    let citems = [...items];
    citems[position].shop -= 1;
    citems[position].buyed = false;
    setItems(citems);
  }

  function handleAddtoCart(e) {
    e.preventDefault();
    let citems = [...items];
    citems[position].cart += citems[position].shop;
    citems[position].shop = 1;
    citems[position].buyed = true;
    let ccart = cartitems;
    ccart += citems[position].cart;
    setCartItems(ccart);
  }

  return (
    <div className="flex h-80 w-40 flex-col gap-3 border-1 bg-stone-700">
      <Link to="/" className="flex justify-center">
        <img src={posterUrl + poster} alt="no hay img" className="h-40" />
      </Link>

      <div className="flex flex-row gap-5">
        <h2>{name}</h2>
        <div className="flex">
          <p>{Math.round(points)}/10</p>
          <img src={wstar} alt="no hay img" className="size-6" />
        </div>
      </div>
      <p>$14,99</p>
      <div className="flex items-center gap-5">
        <button
          className="cursor-pointer bg-amber-400 text-xs"
          type="submit"
          onClick={(e) => handleAddtoCart(e)}
        >
          Add to cart
        </button>
        <button
          className="cursor-pointer"
          onClick={(e) => handleDeleteItems(e)}
        >
          -
        </button>
        <p>{items[position].shop}</p>
        <button className="cursor-pointer" onClick={(e) => handleAddItems(e)}>
          +
        </button>
      </div>
    </div>
  );
}
