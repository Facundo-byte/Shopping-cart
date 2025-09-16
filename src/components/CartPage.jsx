import { useContext } from "react";
import { Header, Footer } from "./FooterHeader.jsx";
import { MoviesContext } from "../context/MoviesContext.jsx";

const posterUrl = "https://image.tmdb.org/t/p/original";

export default function Cart() {
  const { movies, loading, items, setItems, cartitems, setCartItems } =
    useContext(MoviesContext);

  return (
    <div>
      <Header />
      <main>
        <h1>Your shopping cart.</h1>
        <ul>
          <li className="flex flex-col gap-5">
            {movies?.results?.map((movie, index) => {
              if (items[index].cart > 0 && items[index].buyed) {
                return (
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
                );
              }
            })}
          </li>
        </ul>
        <div className="flex justify-around">
          <h2>Total: $ {15.99 * cartitems}</h2>
          <button className="cursor-pointer bg-amber-950">
            Go to checkout
          </button>
        </div>
      </main>
      <Footer />
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
    <div className="flex flex-row justify-around border-1 bg-amber-400">
      <div className="flex gap-10">
        <img src={posterUrl + poster} alt="" className="h-50 w-50" />
        <div className="flex flex-col justify-center">
          <h2>{title}</h2>
          <p>{desc}</p>
          <p>$14,99</p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-3">
        <button className="cursor-pointer" onClick={(e) => handleDeleteItem(e)}>
          -
        </button>
        <p>{items[position].cart}</p>
        <button className="cursor-pointer" onClick={(e) => handleAddItem(e)}>
          +
        </button>
      </div>
    </div>
  );
}
