import {Routes, Route} from "react-router-dom";
import {CategoriesPreview} from "../categories-preview/categories-preview";
import {CategoryPage} from "../category-page/category-page";

export function Shop() {
  return (
      <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category" element={<CategoryPage/>}/>
      </Routes>
  );
}