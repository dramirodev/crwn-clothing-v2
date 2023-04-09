import {createContext, useEffect, useMemo, useState} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: null,
  productSelected: null,
  setProductSelected: () => null,
});

export function CategoriesProvider({children}) {
  const [productSelected, setProductSelected] = useState(null);
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const categoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }

    categoriesMap();

  },[]);

  const value = useMemo(() => ({
    productSelected,
    setProductSelected,
    categoriesMap,
  }), [productSelected, setProductSelected, categoriesMap]);

  return (
      <CategoriesContext.Provider value={value}>
        {children}
      </CategoriesContext.Provider>
  );
}