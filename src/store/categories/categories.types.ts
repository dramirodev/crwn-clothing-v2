export enum CATEGORIES_ACTIONS_TYPES {
  FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE',
}

export interface CategoryItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface Category {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
  route: string;
}

export type CategoryMap = Record<string, CategoryItem[]>;
