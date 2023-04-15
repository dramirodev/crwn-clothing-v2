import { Dispatch } from 'redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesFailure, fetchCategoriesStart, fetchCategoriesSuccess } from './categories.actions';

export const fetchCategoriesAsync = () => async (dispatch: Dispatch<any>) => {
  dispatch(fetchCategoriesStart());
  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (e) {
    dispatch(fetchCategoriesFailure(e as Error));
  }
};
