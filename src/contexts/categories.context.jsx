// jshint esversion:6
import { createContext, useState, useEffect } from "react";

// import SHOP_DATA from "../shop-data.js";

import { getCategoriesAndDocuments } from "../utils/firebase/firestore.util.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);
  const value = { categoriesMap };

  useEffect(() => {
    const getDocuments = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log("Trying to get categories");
      console.log("Categories map");
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getDocuments();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
