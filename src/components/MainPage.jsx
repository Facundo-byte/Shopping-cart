import { useContext } from "react";
import { Header, Footer } from "./FooterHeader.jsx";
import { Link } from "react-router";
import posters from "../assets/Posters.png";
import { DarkmodeContext } from "../context/DarkmodeContext.jsx";

export default function App() {
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <div className={darkmode ? "dark" : ""}>
      <div className="transition-delay-100 flex h-screen max-w-screen flex-col gap-6 bg-stone-100 transition-all dark:bg-stone-900">
        <Header />
        <main className="transition-delay-100 flex flex-1 items-center justify-center bg-stone-100 transition-all md:gap-50 dark:bg-stone-900">
          <div className="flex flex-col flex-wrap items-center justify-center gap-10 md:h-full md:w-120 md:items-start">
            <h1 className="text-6xl font-bold text-lime-600">Cinemovie</h1>
            <p className="font-inter text-center text-neutral-600 md:text-left md:text-xl dark:text-stone-100">
              At <span className="text-indigo-600">Cinemovie</span>, you'll find
              a wide selection of movies and series for every taste. Explore new
              releases, timeless classics, and personalized recommendations —
              all in one place.
            </p>
            <Link
              to="/shop"
              className="inline-flex h-15 w-40 cursor-pointer items-center justify-center rounded-md bg-indigo-700 px-4 py-2 text-stone-100 transition-all delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 active:scale-95 dark:bg-indigo-600"
            >
              Start shopping
            </Link>
          </div>

          <div className="hidden md:flex md:flex-row">
            <img src={posters} alt="no hay img" className="h-100" />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
