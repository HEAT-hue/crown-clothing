// jshint esversion:6
/* React context import */
import { useContext } from "react";

/* Get styles*/
import "./shop.styles.scss";

/* Import created Product context */
import { ProductsContext } from "../../contexts/products.context";

/* Import Product component */
import ProductCard from "../../components/product-card/product-card.component";

function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <h2>This is a shop route</h2>
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default Shop;
