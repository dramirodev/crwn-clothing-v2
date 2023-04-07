import {useContext} from "react";
import ProductCard from "../../components/product-card/product-card";
import {ProductsContext} from "../../context/products.context";

import "./shop.scss";

export function Shop() {
  const {products} = useContext(ProductsContext);
  return (
      <div className="products-container">
        {
          products.map((product) => (
              <ProductCard key={product.id} product={product}/>
          ))
        }
      </div>
  );
}