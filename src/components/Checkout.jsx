import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../context/MoviesContext.jsx";
import { Link } from "react-router";

export default function Checkout() {
  const { setItems, setCartItems, cartitems } = useContext(MoviesContext);

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
    <div>
      {flag ? (
        <div>
          <h1>Thank you for choosing us!</h1>
          <h2>Order received</h2>
        </div>
      ) : (
        <div>
          <h1>Empty cart, try again.</h1>
          <h2>Order cancelled</h2>
        </div>
      )}
      <Link to="/">Go Home</Link>
    </div>
  );
}
