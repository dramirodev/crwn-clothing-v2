import { NavLink } from '../../routes/navigation/navigation.styles';
import { CategoryItem } from '../../store/categories/categories.types';
import ProductCard from '../product-card/product-card';
import './category-preview.styles';
import { CategoryPreviewContainer, PreviewContainer, TitleContainer } from './category-preview.styles';

interface CategoryPreviewProps {
  title: string;
  products: CategoryItem[];
}

export function CategoryPreview ({
  title,
  products
}: CategoryPreviewProps) {

  return (
    <CategoryPreviewContainer>
      <TitleContainer>
        <NavLink to={`/shop/${title}`}>
          {title.toUpperCase()}
        </NavLink>
      </TitleContainer>
      <PreviewContainer>
        {
          products.filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))
        }
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
}
