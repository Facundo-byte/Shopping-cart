import { Header, Footer } from "./FooterHeader.jsx";
import { useContext, memo } from "react";
import { Link } from "react-router";
import wstar from "../assets/Starwhite.png";
import bstar from "../assets/bstar.png";
import { MoviesContext } from "../context/MoviesContext.jsx";
import { DarkmodeContext } from "../context/DarkmodeContext.jsx";
import { ItemsContext } from "../context/ItemsContext.jsx";

const posterUrl = "https://image.tmdb.org/t/p/original";

export default function ShopItems() {
  const { movies, error, loading } = useContext(MoviesContext);
  const { items, setItems, cartitems, setCartItems } = useContext(ItemsContext);
  const { darkmode } = useContext(DarkmodeContext);

  if (error) {
    return <p>hubo un error</p>;
  }

  return (
    <div className={darkmode ? "dark" : ""}>
      <Header />
      {loading ? (
        <main>
          <p>Cargando...</p>
        </main>
      ) : (
        <main className="transition-delay-100 flex flex-col gap-10 bg-stone-100 pt-6 pr-10 pl-10 transition-all dark:bg-stone-900">
          <h1 className="text-4xl font-bold text-lime-600 md:pl-25 md:text-5xl">
            Movie catalogue.
          </h1>
          <ul className="transition-delay-100 flex flex-col gap-15 bg-stone-100 transition-all md:m-auto md:grid md:grid-cols-4 dark:bg-stone-900">
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
                  darkmode={darkmode}
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

export const ItemCard = memo(function ItemCard({
  poster,
  name,
  points,
  items,
  setItems,
  position,
  cartitems,
  setCartItems,
  darkmode,
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
    ccart += citems[position].shop;
    setCartItems(ccart);
  }

  return (
    <div className="flex min-h-80 flex-col gap-3 rounded-xl transition-all delay-30 duration-200 ease-in-out hover:-translate-y-1 hover:scale-120 hover:shadow-xl active:scale-95 md:w-60 md:p-5 dark:text-amber-50 dark:hover:shadow-stone-950/50">
      <button
        type="submit"
        onClick={(e) => handleAddtoCart(e)}
        className="flex cursor-pointer justify-center"
      >
        <img
          src={posterUrl + poster}
          alt="no hay img"
          className="h-70 rounded-2xl"
        />
      </button>

      <div className="flex flex-row justify-between gap-5">
        <h2 className="font-semibold md:max-w-35">{name}</h2>
        <div className="flex">
          <p>{Math.round(points)}/10</p>
          <img
            src={darkmode ? wstar : bstar}
            alt="no hay img"
            className="transition-delay-100 size-5 transition-all"
          />
        </div>
      </div>
      <p>$14,99</p>
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <button
          className="text-s flex w-70 cursor-pointer items-center justify-center rounded-md bg-indigo-500 p-4 text-stone-100 transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 active:scale-95 md:h-9 md:text-xs"
          type="submit"
          onClick={(e) => handleAddtoCart(e)}
        >
          Add to cart
        </button>
        <div className="flex items-center justify-center gap-3">
          <button
            className="hover:bg-stone cursor-pointer text-5xl transition-all delay-50 duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-110 active:scale-95 md:text-base"
            onClick={(e) => handleDeleteItems(e)}
          >
            -
          </button>
          <p className="text-xl md:text-base">{items[position].shop}</p>
          <button
            className="cursor-pointer text-5xl transition-all delay-50 duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-110 active:scale-95 md:text-base"
            onClick={(e) => handleAddItems(e)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
});
