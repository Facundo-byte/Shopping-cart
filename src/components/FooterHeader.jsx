import { Link } from "react-router";
import { useState, useContext } from "react";
import cart from "../assets/Cart.png";
import sun from "../assets/Sun.png";
import wlinkedin from "../assets/Linkedinwhite.png";
import blinkedin from "../assets/Linkedin.png";
import wgithub from "../assets/Githubwhite.png";
import bgithub from "../assets/Github.png";
import { MoviesContext } from "../context/MoviesContext.jsx";

export function Header() {
  const { cartitems } = useContext(MoviesContext);

  return (
    <header className="flex h-40 flex-wrap items-center justify-around bg-stone-900">
      <Link to="/" className="text-lime-600">
        Cinemovie
      </Link>
      <div className="flex items-center gap-10">
        <Link to="/" className="text-lime-600">
          Home
        </Link>
        <Link to="/shop" className="text-lime-600">
          Shop
        </Link>
        <Link to="/cart" className="flex flex-row items-center gap-5">
          <img src={cart} alt="no hay img" />
          <p className="text-amber-50">{cartitems}</p>
        </Link>
        <Link to="/">
          <img src={sun} alt="no hay img" />
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t- flex h-52 flex-col items-center justify-center gap-3 border-amber-50 bg-amber-950">
      <h2 className="caret-amber-50">Github: Facundo-byte</h2>
      <div className="flex gap-8">
        <a href="https://github.com/Facundo-byte">
          <img src={wlinkedin} alt="no hay img" className="size-8" />
        </a>

        <a href="https://www.linkedin.com/in/facundo-david-iascas-1a7427280/">
          <img src={wgithub} alt="no hay img" className="size-8" />
        </a>
      </div>
    </footer>
  );
}
