import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {setCategoriesMap} from "../../store/categories/categories.actions";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {CategoriesPreview} from "../categories-preview/categories-preview";
import {CategoryPage} from "../category-page/category-page";

export function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const categoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      console.log(categoryMap);
      dispatch(setCategoriesMap(categoryMap));
    };

    categoriesMap();

  }, [dispatch]);
  return (
      <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category" element={<CategoryPage/>}/>
      </Routes>
  );
}