import {NavLink} from "../../routes/navigation/navigation.styles";
import ProductCard from "../product-card/product-card";
import "./category-preview.styles";
import {CategoryPreviewContainer, PreviewContainer, TitleContainer} from "./category-preview.styles";

export function CategoryPreview({title, products}) {

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