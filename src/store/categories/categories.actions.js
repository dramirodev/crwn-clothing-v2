import {createAction} from "../../utils/reducers/reducer.utils";
import {CATEGORIES_ACTIONS_TYPES} from "./categories.types";

export const setCategories = (categoriesMap) => createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, categoriesMap,);

export const serProductSelected = (productSelected) => createAction(CATEGORIES_ACTIONS_TYPES.SET_PRODUCT_SELECTED, productSelected,);