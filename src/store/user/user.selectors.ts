import { UserData } from '../../utils/firebase/firebase.utils';
import { RootState } from '../root.reducer';

export const selectCurrentUser = (state: RootState): UserData => state.user.currentUser;
