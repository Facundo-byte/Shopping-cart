import { useState } from "react";
import { DarkmodeContext } from "./DarkmodeContext.jsx";

export const DarkmodeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <DarkmodeContext.Provider
      value={{
        darkmode,
        setDarkmode,
      }}
    >
      {children}
    </DarkmodeContext.Provider>
  );
};
