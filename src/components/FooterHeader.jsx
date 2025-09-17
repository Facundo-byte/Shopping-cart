import { Link } from "react-router";
import { useContext } from "react";
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
import { MoviesContext } from "../context/MoviesContext.jsx";

export function Header() {
  const { cartitems, darkmode, setDarkmode } = useContext(MoviesContext);

  function cambiarTema(e) {
    e.preventDefault();
    setDarkmode(!darkmode);
  }

  return (
    <div className={darkmode ? "dark" : ""}>
      <header className="flex h-40 flex-wrap items-center justify-around bg-stone-300 dark:bg-stone-900">
        <Link to="/" className="size-25 font-semibold text-lime-600">
          <img src={cinemovie} alt="" />
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          <Link to="/" className="font-semibold text-lime-600">
            Home
          </Link>
          <Link to="/shop" className="font-semibold text-lime-600">
            Shop
          </Link>
          <Link to="/cart" className="flex size-8 flex-row items-center gap-2">
            <img src={darkmode ? cart : bcart} alt="no hay img" />
            {cartitems ? (
              <p className="text-stone-700 dark:text-amber-50">{cartitems}</p>
            ) : null}
          </Link>
          <button
            className="size-8 cursor-pointer"
            onClick={(e) => cambiarTema(e)}
          >
            <img src={darkmode ? sun : moon} alt="no hay img" />
          </button>
        </div>

        {
          /////////////mobile}
        }
        <div className="flex flex-col md:hidden">
          <button>
            <img src={darkmode ? menu : bmenu} alt="" />
          </button>
          <div>
            <Link to="/" className="font-semibold text-lime-600">
              Home
            </Link>
            <Link to="/shop" className="font-semibold text-lime-600">
              Shop
            </Link>
            <Link
              to="/cart"
              className="flex size-8 flex-row items-center gap-2"
            >
              <img src={darkmode ? cart : bcart} alt="no hay img" />
              {cartitems ? (
                <p className="text-stone-700 dark:text-amber-50">{cartitems}</p>
              ) : null}
            </Link>
            <button
              className="size-8 cursor-pointer"
              onClick={(e) => cambiarTema(e)}
            >
              <img src={darkmode ? sun : moon} alt="no hay img" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export function Footer() {
  const { darkmode } = useContext(MoviesContext);

  return (
    <footer className="border-t- flex h-52 flex-col items-center justify-center gap-3 border-amber-50 bg-stone-300 dark:bg-stone-900">
      <h2 className="text-stone-900 dark:text-amber-50">
        Github: Facundo-byte
      </h2>
      <div className="flex gap-8">
        <a href="https://github.com/Facundo-byte">
          <img
            src={darkmode ? wlinkedin : blinkedin}
            alt="no hay img"
            className="size-8"
          />
        </a>

        <a href="https://www.linkedin.com/in/facundo-david-iascas-1a7427280/">
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
