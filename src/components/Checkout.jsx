import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../context/MoviesContext.jsx";
import { Link } from "react-router";

export default function Checkout() {
  const { setItems, setCartItems, cartitems, darkmode } =
    useContext(MoviesContext);

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const citems = Array.from({ length: 20 }, () => ({
      shop: 1,
      buyed: false,
      cart: 0,
    }));
    if (cartitems > 0) {
      setFlag(true);
      setCartItems(0);
    }
    setItems(citems);
  }, []);

  return (
    <div className={darkmode ? "dark" : ""}>
      <div className="flex min-h-screen min-w-screen flex-col items-center justify-center gap-5 dark:bg-stone-900">
        {flag ? (
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-4xl text-stone-600 dark:text-stone-300">
              Thank you for choosing us!
            </h1>
            <h2 className="text-6xl font-bold text-stone-600 dark:text-stone-300">
              Order received
            </h2>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-4xl text-stone-600 dark:text-stone-300">
              Empty cart, try again.
            </h1>
            <h2 className="text-center text-6xl font-bold text-stone-600 dark:text-stone-300">
              Order cancelled
            </h2>
          </div>
        )}
        <Link
          to="/"
          className="flex h-30 w-60 items-center justify-center rounded-xl bg-indigo-600 text-4xl font-bold text-stone-300 md:h-30 md:w-xl"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
