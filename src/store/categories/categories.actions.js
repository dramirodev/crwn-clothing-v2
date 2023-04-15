import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {createAction} from "../../utils/reducers/reducer.utils";
import {CATEGORIES_ACTIONS_TYPES} from "./categories.types";

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START,);

export const fetchCategoriesSuccess = (categoriesMap) => createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesMap,);

export const fetchCategoriesFailure = (errorMessage) => createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE, errorMessage,);

export const setCategories = (categoriesMap) => createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, categoriesMap,);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (e) {
    dispatch(fetchCategoriesFailure(e.message));
  }
};
