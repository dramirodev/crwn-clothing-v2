import { useNavigate } from 'react-router-dom';
import { DirectoryCategory } from '../directory/directory.component';
import './category-item.styles';
import {
  BackgroundImageContainer,
  CategoryBodyContainer,
  CategoryItemContainer,
  NameContainer,
  TitleContainer
} from './category-item.styles';

interface CategoryItemProps {
  category: DirectoryCategory;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const {
    imageUrl,
    title,
    route
  } = category;
  const navigate = useNavigate();

  const onNavigateToCategory = () => {
    navigate(`/${route}`);
  };
  return (
    <CategoryItemContainer onClick={onNavigateToCategory}>
      <BackgroundImageContainer imageUrl={imageUrl}/>
      <CategoryBodyContainer>
        <TitleContainer>{title}</TitleContainer>
        <NameContainer>Shop Now</NameContainer>
      </CategoryBodyContainer>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
