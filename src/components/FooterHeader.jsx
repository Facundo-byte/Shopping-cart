import { Link } from "react-router";
import cart from "../assets/Cart.png";
import sun from "../assets/Sun.png";
import wlinkedin from "../assets/Linkedinwhite.png";
import blinkedin from "../assets/Linkedin.png";
import wgithub from "../assets/Githubwhite.png";
import bgithub from "../assets/Github.png";

export function Header() {
  return (
    <header class="flex h-40 flex-wrap items-center justify-around bg-stone-900">
      <Link to="/" class="text-lime-600">
        Cinemovie
      </Link>
      <div class="flex items-center gap-10">
        <Link to="/" class="text-lime-600">
          Home
        </Link>
        <Link to="/shop" class="text-lime-600">
          Shop
        </Link>
        <Link to="/">
          <img src={cart} alt="no hay img" />
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
    <footer class="border-t- flex h-52 flex-col items-center justify-center gap-3 border-amber-50 bg-amber-950">
      <h2 class="caret-amber-50">Github: Facundo-byte</h2>
      <div class="flex gap-8">
        <a href="https://github.com/Facundo-byte">
          <img src={wlinkedin} alt="no hay img" class="size-8" />
        </a>

        <a href="https://www.linkedin.com/in/facundo-david-iascas-1a7427280/">
          <img src={wgithub} alt="no hay img" class="size-8" />
        </a>
      </div>
    </footer>
  );
}
