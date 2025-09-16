import { Header, Footer } from "./FooterHeader.jsx";
import posters from "../assets/Posters.png";

export default function Cart() {
  return (
    <div>
      <Header />
      <main>
        <h1>Your shopping cart.</h1>
        <ul>
          <li className="flex flex-col gap-5">
            <Movie />
            <Movie />
            <Movie />
          </li>
        </ul>
        <div className="flex justify-around">
          <h2>Total: $500</h2>
          <button className="cursor-pointer bg-amber-950">
            Go to checkout
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function Movie() {
  return (
    <div className="flex flex-row justify-around border-1 bg-amber-400">
      <div className="flex gap-10">
        <img src={posters} alt="" className="h-50 w-50" />
        <div className="flex flex-col justify-center">
          <h2>Avengers</h2>
          <p>Pelicula de avengers</p>
          <p>$15,99</p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-3">
        <button className="cursor-pointer">-</button>
        <p>1</p>
        <button className="cursor-pointer">+</button>
      </div>
    </div>
  );
}
