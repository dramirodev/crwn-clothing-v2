import { AnyAction } from 'redux';
import { fetchCategoriesFailure, fetchCategoriesStart, fetchCategoriesSuccess } from './categories.actions';
import { type Category } from './categories.types';

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null
};

export interface CategoryState {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}

export const categoryReducer = (
  state: CategoryState = INITIAL_STATE,
  action = {} as AnyAction
): CategoryState => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true,
      error: null
    };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      categories: action.payload,
      isLoading: false,
      error: null
    };
  }

  if (fetchCategoriesFailure.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload
    };
  }
  return state;
};
