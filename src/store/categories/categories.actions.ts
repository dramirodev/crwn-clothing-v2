import { type Action, type ActionWithPayload, createAction, withMatcher } from '../../utils/reducers/reducer.utils';
import { CATEGORIES_ACTIONS_TYPES, type Category } from './categories.types';

export type FetchCategoriesStartAction = Action<CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START>;
export type FetchCategoriesSuccessAction = ActionWithPayload<CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;
export type FetchCategoriesErrorAction = ActionWithPayload<CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE, Error>;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStartAction => createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categoriesMap: Category[]): FetchCategoriesSuccessAction => createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesMap));

export const fetchCategoriesFailure = withMatcher((error: Error): FetchCategoriesErrorAction => createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE, error));
