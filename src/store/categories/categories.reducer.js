import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categories: [], productSelected: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    }
  }
});

export const {setCategories} = categoriesSlice.actions;

export const categoryReducer = categoriesSlice.reducer;
