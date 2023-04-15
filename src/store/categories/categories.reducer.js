import {CATEGORIES_ACTIONS_TYPES} from "./categories.types";

const INITIAL_STATE = {
  categories: [], isLoading: false, error: null,
};

export const categoryReducer = (state = INITIAL_STATE, action) => {

  const {type, payload} = action;

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_STARTS:
      return {
        ...state, isLoading: true, error: null,
      };
    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state, categories: payload, isLoading: false, error: null,
      };

    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE:
      return {
        ...state, isLoading: false, error: payload,
      };

    default:
      return state;
  }
};