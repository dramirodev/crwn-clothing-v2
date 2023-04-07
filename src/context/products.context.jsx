import {createContext, useMemo, useState} from "react";
import PRODUCTS from "../data/shop-data.json";

export const ProductsContext = createContext({
  products: null,
  productSelected: null,
  setProductSelected: () => null,
});

export function ProductsProvider({children}) {
  const [productSelected, setProductSelected] = useState(null);
  const [products, setProducts] = useState(PRODUCTS);

  const value = useMemo(() => ({
    productSelected,
    setProductSelected,
    products,
  }), [productSelected, setProductSelected]);

  return (
      <ProductsContext.Provider value={value}>
        {children}
      </ProductsContext.Provider>
  );
}