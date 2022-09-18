import "./category.styles.scss";

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

function Category() {
  console.log("Mounting Category page");
  // Get URL Parameter
  const { category } = useParams();

  console.log(category);

  const { categoriesMap } = useContext(CategoriesContext);
  console.log("Category map gotten");
  console.log(categoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log("Use effect running with category map to be");
    console.log(categoriesMap);
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default Category;
