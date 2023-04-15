import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCategoriesAsync } from '../../store/categories/thunk';
import { CategoriesPreview } from '../categories-preview/categories-preview';
import { CategoryPage } from '../category-page/category-page';

export function Shop () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<CategoryPage/>}/>
    </Routes>
  );
}
