import { useContext } from "react";
import { Link } from "react-router";
import { Header, Footer } from "./FooterHeader.jsx";
import { MoviesContext } from "../context/MoviesContext.jsx";

const posterUrl = "https://image.tmdb.org/t/p/original";

export default function Cart() {
  const { movies, items, setItems, cartitems, setCartItems, darkmode } =
    useContext(MoviesContext);

  return (
    <div className={darkmode ? "dark" : ""}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-10 bg-stone-300 dark:bg-stone-900">
          <h1 className="text-center text-3xl font-bold text-lime-600 md:pl-25 md:text-left md:text-5xl">
            Your shopping cart.
          </h1>
          <ul className="flex flex-col gap-5">
            {movies?.results?.map((movie, index) => {
              if (items[index].cart > 0 && items[index].buyed) {
                return (
                  <li key={index}>
                    <Movie
                      title={movie.title}
                      desc={movie.overview}
                      poster={movie.poster_path}
                      items={items}
                      position={index}
                      setItems={setItems}
                      cartitems={cartitems}
                      setcartitems={setCartItems}
                    />
                  </li>
                );
              }
            })}
          </ul>
          <div className="flex flex-col items-center justify-around gap-5 md:flex-row">
            <h2 className="text-4xl font-bold text-stone-800 md:pl-25 dark:text-stone-300">
              Total: $ {15.99 * cartitems}
            </h2>
            <Link
              to="/checkout"
              className="flex h-15 w-40 cursor-pointer items-center justify-center rounded-md bg-indigo-600 text-stone-200"
            >
              Go to checkout
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export function Movie({
  title,
  desc,
  poster,
  items,
  position,
  setItems,
  cartitems,
  setcartitems,
}) {
  function handleAddItem(e) {
    e.preventDefault();
    const citems = [...items];
    let ccart = cartitems;
    citems[position].cart++;
    ccart++;
    setcartitems(ccart);
    setItems(citems);
  }

  function handleDeleteItem(e) {
    e.preventDefault();
    const citems = [...items];
    let ccart = cartitems;
    citems[position].cart--;
    ccart--;
    setcartitems(ccart);
    setItems(citems);
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-around">
      <div className="flex gap-10">
        <img
          src={posterUrl + poster}
          alt=""
          className="h-60 w-40 rounded-2xl"
        />
        <div className="flex flex-col justify-center gap-5 text-stone-700 md:gap-2 dark:text-stone-300">
          <h2 className="text-3xl font-medium md:text-2xl">{title}</h2>
          <p className="hidden max-w-100 md:block">{desc}</p>
          <p className="text-xl font-medium md:text-base">$14,99</p>

          <div className="flex flex-row items-center justify-center gap-6 md:hidden">
            <button
              className="cursor-pointer text-5xl text-stone-800 dark:text-stone-300"
              onClick={(e) => handleDeleteItem(e)}
            >
              -
            </button>
            <p className="text-3xl text-stone-800 dark:text-stone-300">
              {items[position].cart}
            </p>
            <button
              className="cursor-pointer text-5xl text-stone-800 dark:text-stone-300"
              onClick={(e) => handleAddItem(e)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:flex-row md:items-center md:gap-3">
        <button
          className="cursor-pointer text-2xl text-stone-800 dark:text-stone-300"
          onClick={(e) => handleDeleteItem(e)}
        >
          -
        </button>
        <p className="text-stone-800 dark:text-stone-300">
          {items[position].cart}
        </p>
        <button
          className="cursor-pointer text-2xl text-stone-800 dark:text-stone-300"
          onClick={(e) => handleAddItem(e)}
        >
          +
        </button>
      </div>
    </div>
  );
}
