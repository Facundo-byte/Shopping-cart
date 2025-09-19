import { useContext, memo } from "react";
import { Link } from "react-router";
import { Header, Footer } from "./FooterHeader.jsx";
import { MoviesContext } from "../context/MoviesContext.jsx";
import { DarkmodeContext } from "../context/DarkmodeContext.jsx";
import { ItemsContext } from "../context/ItemsContext.jsx";
import wadd from "../assets/wadd.png";
import badd from "../assets/add.png";
import wminus from "../assets/wminus.png";
import bminus from "../assets/minus.png";

import { motion } from "motion/react";

const posterUrl = "https://image.tmdb.org/t/p/original";

export default function Cart() {
  const { movies } = useContext(MoviesContext);
  const { items, setItems, cartitems, setCartItems } = useContext(ItemsContext);
  const { darkmode } = useContext(DarkmodeContext);
  const active = 3;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className={darkmode ? "dark" : ""}>
      <div className="transition-delay-100 flex min-h-screen flex-col gap-6 bg-stone-100 transition-all dark:bg-stone-900">
        <Header active={active} />
        <motion.main
          className="transition-delay-100 flex flex-1 flex-col gap-10 bg-stone-100 transition-colors dark:bg-stone-900"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-center text-3xl font-bold text-lime-600 md:pl-25 md:text-left md:text-5xl">
            Your shopping cart.
          </h1>
          <motion.ul
            className="flex flex-col justify-center gap-5 md:items-center"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            {movies?.results?.map((movie, index) => {
              if (items[index].cart > 0 && items[index].buyed) {
                return (
                  <motion.li key={index} variants={itemVariants}>
                    <Movie
                      title={movie.title}
                      desc={movie.overview}
                      poster={movie.poster_path}
                      items={items}
                      position={index}
                      setItems={setItems}
                      cartitems={cartitems}
                      setcartitems={setCartItems}
                      darkmode={darkmode}
                    />
                  </motion.li>
                );
              }
            })}
          </motion.ul>
          <motion.div
            className="flex flex-col items-center justify-around gap-5 md:flex-row"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2 className="text-4xl font-bold text-stone-800 md:pl-25 dark:text-stone-300">
              Total: $ {Math.round(14.99 * cartitems * 100) / 100}
            </h2>
            <Link
              to="/checkout"
              className="inline-flex h-15 w-40 cursor-pointer items-center justify-center rounded-md bg-indigo-700 px-4 py-2 text-stone-100 transition-all delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 active:scale-95 dark:bg-indigo-600"
            >
              Go to checkout
            </Link>
          </motion.div>
        </motion.main>
        <Footer />
      </div>
    </div>
  );
}

export const Movie = memo(function Movie({
  title,
  desc,
  poster,
  items,
  position,
  setItems,
  cartitems,
  setcartitems,
  darkmode,
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
    <div className="flex flex-col rounded-xl p-5 transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl md:min-w-300 md:flex-row md:justify-between dark:shadow-stone-950/80">
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

          <div className="flex flex-row items-center justify-start gap-6 md:hidden">
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
          className="cursor-pointer text-stone-800 transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 active:scale-95 dark:text-stone-300"
          onClick={(e) => handleDeleteItem(e)}
        >
          <img
            src={darkmode ? wminus : bminus}
            alt="no hay imagen"
            className="size-10"
          />
        </button>
        <p className="text-stone-800 dark:text-stone-300">
          {items[position].cart}
        </p>
        <button
          className="cursor-pointer text-stone-800 transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 active:scale-95 dark:text-stone-300"
          onClick={(e) => handleAddItem(e)}
        >
          <img
            src={darkmode ? wadd : badd}
            alt="no hay imagen"
            className="size-10"
          />
        </button>
      </div>
    </div>
  );
});
