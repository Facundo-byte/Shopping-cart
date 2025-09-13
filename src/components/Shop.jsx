import { Header, Footer } from "./FooterHeader.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function ShopItems() {
  const [movies, setMovies] = useState("");

  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Movie catalogue.</h1>
        <ul></ul>
      </main>
      <Footer />
    </div>
  );
}
