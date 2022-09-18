// jshint esversion:6
import ProductCard from "../product-card/product-card.component";

import {
CategoryPreviewContainer,
TitleLink,
Preview } from "./category-preview.styles"

function CategoryPreview(props) {
  // destructure props
  const { title, products } = props;

  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
