import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card';
import { selectCategoriesMap } from '../../store/categories/categories.selectors';
import { CategoryItem, CategoryMap } from '../../store/categories/categories.types';

import { CategoryPageContainer } from './category-page.styles';

export function CategoryPage () {
  const categoriesMap: CategoryMap = useSelector(selectCategoriesMap);
  const { category } = useParams();

  const [products, setProducts] = useState<CategoryItem[]>();

  useEffect(() => {
    if (category && categoriesMap[category]) {
      setProducts(categoriesMap[category]);
    } else {
      setProducts([]);
    }
  }, [category, categoriesMap]);

  return (
    <Fragment>
      category && <h1 className="category-title">{category?.toUpperCase()}</h1>
      <CategoryPageContainer>
        {
          products && products?.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </CategoryPageContainer>
    </Fragment>
  );
}
