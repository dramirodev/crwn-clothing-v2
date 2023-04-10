import CategoryItem from '../category-item/category-item.component';
import {DirectoryMenuContainer} from "./directory.styles";

const Directory = ({categories}) => {
  return (
      <DirectoryMenuContainer>
        {categories.map((category) => (
            <CategoryItem key={category.id} category={category}/>
        ))}
      </DirectoryMenuContainer>
  );
};

export default Directory;
