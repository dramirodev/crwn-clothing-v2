import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import { USER_ACTIONS_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null
};

export type UserState = {
  currentUser: UserData | null,
}

export const userReducer = (state: UserState = INITIAL_STATE, action: AnyAction) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
};

