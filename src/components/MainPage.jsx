import { Header, Footer } from "./FooterHeader.jsx";
import { Link } from "react-router";
import posters from "../assets/Posters.png";

export default function App() {
  return (
    <div class="flex h-screen flex-col bg-stone-900">
      <Header />
      <main class="flex flex-1 items-center justify-center gap-50 bg-stone-900">
        <div class="items-left flex h-full w-120 flex-col flex-wrap justify-center gap-10">
          <h1 class="text-6xl font-bold text-lime-600">Cinemovie</h1>
          <p class="font-inter text-2xl text-stone-100">
            At <span class="text-indigo-600">Cinemovie</span>, you'll find a
            wide selection of movies and series for every taste. Explore new
            releases, timeless classics, and personalized recommendations — all
            in one place.
          </p>
          <Link
            to="/shop"
            class="flex h-10 w-40 cursor-pointer items-center justify-center bg-indigo-600"
          >
            Start shopping
          </Link>
        </div>

        <div class="flex flex-row">
          <img src={posters} alt="no hay img" class="h-120" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
