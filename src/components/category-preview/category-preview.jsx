import {useNavigate} from "react-router-dom";
import ProductCard from "../product-card/product-card";
import "./category-preview.styles.scss";

export function CategoryPreview({title, products}) {
  const navigate = useNavigate();

  const navigateToCategory = () => {
    navigate(`/shop/${title}`);
  };

  return (
      <div className="category-preview-container">
        <h2><span onClick={navigateToCategory}>{title.toUpperCase()}</span></h2>
        <div className="preview">
          {
            products.filter((_, idx) => idx < 4)
                .map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
          }
        </div>
      </div>
  );
}