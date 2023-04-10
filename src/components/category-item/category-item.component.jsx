import {useNavigate} from "react-router-dom";
import './category-item.styles';
import {
  BackgroundImageContainer,
  CategoryBodyContainer,
  CategoryItemContainer,
  NameContainer,
  TitleContainer
} from "./category-item.styles";

const CategoryItem = ({category}) => {
  const {imageUrl, title} = category;
  const navigate = useNavigate();

  const navigateToCategory = () => {
    navigate(`/shop/${title}`);
  };
  return (
      <CategoryItemContainer>
        <BackgroundImageContainer
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
        />
        <CategoryBodyContainer onClick={navigateToCategory}>
          <TitleContainer>{title}</TitleContainer>
          <NameContainer>Shop Now</NameContainer>
        </CategoryBodyContainer>
      </CategoryItemContainer>
  );
};

export default CategoryItem;
