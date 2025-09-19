import { Link } from "react-router";
import { useContext, useState, memo } from "react";
import cart from "../assets/Cart.png";
import bcart from "../assets/bcart.png";
import sun from "../assets/Sun.png";
import moon from "../assets/Moon.png";
import wlinkedin from "../assets/Linkedinwhite.png";
import blinkedin from "../assets/Linkedin.png";
import wgithub from "../assets/Githubwhite.png";
import bgithub from "../assets/Github.png";
import cinemovie from "../assets/cinemovie.png";
import menu from "../assets/Menu.png";
import bmenu from "../assets/bmenu.png";
import { ItemsContext } from "../context/ItemsContext.jsx";
import { DarkmodeContext } from "../context/DarkmodeContext.jsx";

import { motion } from "motion/react";

export const Header = memo(function Header() {
  const { darkmode, setDarkmode } = useContext(DarkmodeContext);
  const { cartitems } = useContext(ItemsContext);

  const [show, setShow] = useState(false);

  function changeTheme(e) {
    e.preventDefault();
    setDarkmode(!darkmode);
  }

  function showMenu(e) {
    e.preventDefault();
    setShow(!show);
  }
  return (
    <div className={darkmode ? "dark" : ""}>
      <header className="transition-delay-100 flex flex-col flex-wrap items-center justify-around bg-stone-100 transition-all md:h-40 dark:bg-stone-900">
        <div className="flex h-40 min-w-screen flex-wrap items-center justify-around md:min-w-100">
          <Link
            to="/"
            className="flex size-25 items-center justify-center rounded-xl font-semibold text-lime-600 transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <img src={cinemovie} alt="" />
          </Link>
          <button onClick={(e) => showMenu(e)} className="md:hidden">
            <img src={darkmode ? menu : bmenu} alt="" />
          </button>
        </div>

        <motion.div
          className="flex flex-col items-center justify-center gap-8 md:h-30 md:w-100 md:flex-row"
          initial={false}
          animate={
            window.innerWidth < 768
              ? show
                ? { height: "auto" }
                : { height: 0 }
              : {}
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <Link
            to="/"
            className="flex h-10 w-15 items-center justify-center rounded-xl font-semibold text-lime-600 transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-stone-200 dark:hover:bg-stone-700"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="flex h-10 w-15 items-center justify-center rounded-xl font-semibold text-lime-600 transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-stone-200 dark:hover:bg-stone-700"
          >
            Shop
          </Link>
          <Link
            to="/cart"
            className="flex h-13 w-14 flex-row items-center justify-center gap-2 rounded-xl transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-stone-200 dark:hover:bg-stone-700"
          >
            <img
              src={darkmode ? cart : bcart}
              alt="no hay img"
              className="size-8"
            />
            {cartitems ? (
              <p className="text-stone-700 dark:text-amber-50">{cartitems}</p>
            ) : null}
          </Link>
          <button
            className="flex size-11 cursor-pointer items-center justify-center rounded-xl transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-stone-200 dark:hover:bg-stone-700"
            onClick={(e) => changeTheme(e)}
          >
            <img
              src={darkmode ? sun : moon}
              alt="no hay img"
              className="size-8"
            />
          </button>
        </motion.div>
      </header>
    </div>
  );
});

export function Footer() {
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <footer className="border-t- transition-delay-100 flex h-52 flex-col items-center justify-center gap-3 border-amber-50 bg-stone-100 transition-all dark:bg-stone-900">
      <h2 className="text-stone-900 dark:text-amber-50">
        Github: Facundo-byte
      </h2>
      <div className="flex gap-8">
        <a
          href="https://github.com/Facundo-byte"
          className="transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          <img
            src={darkmode ? wlinkedin : blinkedin}
            alt="no hay img"
            className="size-8"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/facundo-david-iascas-1a7427280/"
          className="transition-all delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          <img
            src={darkmode ? wgithub : bgithub}
            alt="no hay img"
            className="size-8"
          />
        </a>
      </div>
    </footer>
  );
}
