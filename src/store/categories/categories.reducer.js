import {CATEGORIES_ACTIONS_TYPES} from "./categories.types";

const INITIAL_STATE = {
  categoriesMap: null, productSelected: null,
};

export const categoryReducer = (state = INITIAL_STATE, action) => {

  const {type, payload} = action;

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_MAP:
      console.log('SET_CATEGORIES_MAP', payload);
      return {
        ...state, categoriesMap: payload,
      };
    case CATEGORIES_ACTIONS_TYPES.SET_PRODUCT_SELECTED:
      return {
        ...state, productSelected: payload,
      };
    default:
      return state;
  }
};