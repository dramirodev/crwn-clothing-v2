import { UserData } from '../../utils/firebase/firebase.utils';
import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducers/reducer.utils';
import { USER_ACTIONS_TYPES } from './user.types';

export type SetCurrentAction = ActionWithPayload<USER_ACTIONS_TYPES.SET_CURRENT_USER, UserData>

export const setCurrentUser = withMatcher((user: UserData): SetCurrentAction => {
  return createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);
});
