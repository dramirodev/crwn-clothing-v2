import {Fragment, useContext} from "react";
import {CategoryPreview} from "../../components/category-preview/category-preview";
import {CategoriesContext} from "../../context/categories.context";

export function CategoriesPreview() {
  const {categoriesMap} = useContext(CategoriesContext);

  return (
      <Fragment>
        {
          Object.keys(categoriesMap).map((category) => (
              <CategoryPreview key={category} title={category} products={categoriesMap[category]}/>
          ))
        }
      </Fragment>
  );
}