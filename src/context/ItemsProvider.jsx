import { useState, useEffect } from "react";
import { ItemsContext } from "./ItemsContext.jsx";

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([{ value: 0, buyed: false, cart: 0 }]);
  const [cartitems, setCartItems] = useState(0);

  useEffect(() => {
    const citems = Array.from({ length: 20 }, () => ({
      shop: 1,
      buyed: false,
      cart: 0,
    }));
    setItems(citems);
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        cartitems,
        setCartItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
