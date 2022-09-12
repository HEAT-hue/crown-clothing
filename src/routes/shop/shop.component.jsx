// jshint esversion:6
/* React context import */
import { useContext} from "react";

/* Get styles*/
import "./shop.styles.scss";

/* Import created Product context */
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
}

export default Shop;