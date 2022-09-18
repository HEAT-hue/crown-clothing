// jshint esversion:6

/* Get Styled components */
import {
  CategoryContainer,
  BackgroundImage,
  CategoryBodyContainer,
  H2,
  P,
} from "./category-item.styles";

function CategoryItem(props) {
  /*Destructure props*/
  const { title, imageUrl } = props.category;

  return (
    <CategoryContainer>
      <BackgroundImage bgImg={imageUrl} />
      <CategoryBodyContainer>
        <H2>{title}</H2>
        <P>Shop Now</P>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
}

export default CategoryItem;
