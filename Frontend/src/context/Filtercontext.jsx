import { createContext, useState } from "react";  //context API

export const Filtercontext = createContext();

export default function FilterProvider({ children }) {
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [rating, setrating] = useState("");

  return (
    <Filtercontext.Provider value={{ price, setprice, category, setcategory, rating, setrating }}>
      {children}
    </Filtercontext.Provider>
  );
}
