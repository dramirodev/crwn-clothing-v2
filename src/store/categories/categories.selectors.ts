import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';
import type { CategoryState } from './categories.reducer';

const selectCategoryReducer = (state: RootState): CategoryState => state.categories;

export const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.categories);
export const selectCategoriesMap = createSelector([selectCategories], (categories) => categories.reduce((acc, category) => {
  const {
    title,
    items
  } = category;
  // @ts-ignore
  acc[title.toLowerCase()] = items;
  return acc;
}, {}));
