import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { CategoryPreview } from '../../components/category-preview/category-preview';
import { selectCategoriesMap } from '../../store/categories/categories.selectors';
import { CategoryMap } from '../../store/categories/categories.types';

export function CategoriesPreview () {
  const categoriesMap: CategoryMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {
        categoriesMap ? Object.keys(categoriesMap).map((category) => (
          <CategoryPreview key={category} title={category} products={categoriesMap[category]}/>
        )) : null
      }
    </Fragment>
  );
}
