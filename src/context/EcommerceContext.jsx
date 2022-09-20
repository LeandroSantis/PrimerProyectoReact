import { createContext, useEffect, useState } from "react";

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);

  async function fetchData(searchQuery) {
    let data = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`
    );
    let response = await data.json();

    setProducts(response.results);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <EcommerceContext.Provider
      value={{ products, carrito, setCarrito, fetchData, setProducts }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};
