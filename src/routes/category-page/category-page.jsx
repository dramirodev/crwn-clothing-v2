import {Fragment, useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import {CategoriesContext} from "../../context/categories.context";

import "./category-page.scss";

export function CategoryPage() {
  const {category} = useParams();
  const {categoriesMap} = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    if (categoriesMap[category]) {
      setProducts(categoriesMap[category]);
    } else {
      setProducts([]);
    }
  }, [category, categoriesMap]);
  return (
      <Fragment>
        <h1 className="category-title">{category.toUpperCase()}</h1>
        <div className="category-page-container">
          {
              products && products?.map((product) => (
                  <ProductCard key={product.id} product={product}/>
              ))
          }
        </div>
      </Fragment>
  );
}