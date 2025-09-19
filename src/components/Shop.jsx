import { Header, Footer } from "./FooterHeader.jsx";
import { useContext, useEffect, useState, memo } from "react";
import { Link } from "react-router";
import wstar from "../assets/Starwhite.png";
import bstar from "../assets/bstar.png";
import { MoviesContext } from "../context/MoviesContext.jsx";
import { DarkmodeContext } from "../context/DarkmodeContext.jsx";
import { ItemsContext } from "../context/ItemsContext.jsx";
import { motion, useAnimationControls } from "motion/react";

const posterUrl = "https://image.tmdb.org/t/p/original";

export default function ShopItems() {
  const { movies, error, loading } = useContext(MoviesContext);
  const { items, setItems, cartitems, setCartItems } = useContext(ItemsContext);
  const { darkmode } = useContext(DarkmodeContext);
  const active = 1;

  if (error) {
    return <p>hubo un error</p>;
  }

  return (
    <div className={darkmode ? "dark" : ""}>
      <Header active={active} />
      {loading ? (
        <main>
          <p>Cargando...</p>
        </main>
      ) : (
        <motion.main
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="transition-delay-100 flex flex-col gap-10 bg-stone-100 pt-6 pr-10 pl-10 transition-colors dark:bg-stone-900"
        >
          <h1 className="text-4xl font-bold text-lime-600 md:pl-25 md:text-5xl">
            Movie catalogue.
          </h1>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="transition-delay-100 flex flex-col gap-15 bg-stone-100 transition-all md:m-auto md:grid md:grid-cols-4 dark:bg-stone-900"
          >
            {movies.results.map((movie, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
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
              </motion.li>
            ))}
          </motion.ul>
        </motion.main>
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
  const animcontrol = useAnimationControls();
  const [isLarge, setIsLarge] = useState(false);

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

  function handleImageClick(e) {
    e.preventDefault();
    animcontrol.start("push");
    handleAddtoCart(e);
  }

  function handleAddtoCart(e) {
    e.preventDefault();
    let citems = [...items];
    citems[position].cart += citems[position].shop;
    citems[position].buyed = true;
    let ccart = cartitems;
    ccart += citems[position].shop;
    citems[position].shop = 1;
    setCartItems(ccart);
  }

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsLarge(mq.matches);

    const handler = (e) => setIsLarge(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <motion.div
      className="flex min-h-80 flex-col gap-3 rounded-2xl p-5 shadow-xl md:w-60 md:shadow-none dark:text-amber-50 dark:shadow-stone-950/50 dark:hover:shadow-stone-950/50"
      variants={{
        push: {
          scale: isLarge ? [1.1, 1, 1.2] : [1.1, 0.8, 1],
          rotate: ["1deg", "2deg", "0deg"],
          transition: { duration: 0.2 },
        },
      }}
      whileHover={{
        boxShadow: darkmode
          ? "0 10px 15px -3px rgba(12, 10, 9, 0.5), 0 4px 6px -2px rgba(12, 10, 9, 0.5)"
          : "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
        y: -4,
        scale: 1.2,
      }}
      transition={{ duration: 0.2 }}
      animate={animcontrol}
    >
      <button
        type="submit"
        onClick={(e) => handleImageClick(e)}
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
      <div className="flex min-w-full flex-col items-center gap-6 md:flex-row md:justify-center md:gap-2">
        <button
          className="text-s flex w-70 cursor-pointer items-center justify-center rounded-xl bg-indigo-500 p-4 text-stone-100 transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 active:scale-95 md:h-9 md:border-none md:text-xs"
          type="submit"
          onClick={(e) => handleAddtoCart(e)}
        >
          Add to cart
        </button>

        <div className="flex items-center justify-center gap-9 border-stone-600 md:gap-3 md:border-none md:bg-transparent dark:border-stone-400 md:dark:bg-transparent">
          <button
            className="hover:bg-stone flex h-14 w-14 cursor-pointer items-center justify-center rounded-xl bg-indigo-500 p-5 text-5xl text-stone-100 transition-all delay-50 duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-110 active:scale-95 md:h-auto md:w-0 md:border-none md:bg-transparent md:p-2 md:text-base md:text-stone-900 dark:border-stone-400 md:dark:text-stone-100"
            onClick={(e) => handleDeleteItems(e)}
          >
            -
          </button>
          <p className="text-xl md:text-base">{items[position].shop}</p>
          <button
            className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-xl bg-indigo-500 p-5 text-5xl text-stone-100 transition-all delay-50 duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-110 active:scale-95 md:w-0 md:border-none md:bg-transparent md:p-2 md:text-base md:text-stone-900 md:dark:text-stone-100"
            onClick={(e) => handleAddItems(e)}
          >
            +
          </button>
        </div>
      </div>
    </motion.div>
  );
});
