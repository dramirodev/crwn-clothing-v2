// import {createContext, useCallback, useEffect, useMemo, useReducer} from "react";
// import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils";
// import {createAction} from "../utils/reducers/reducer.utils";
//
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });
//
// export const USER_ACTIONS_TYPES = {
//   SET_CURRENT_USER: 'SET_CURRENT_USER'
// };
//
// const userReducer = (state, action) => {
//   const {type, payload} = action;
//
//   switch (type) {
//     case USER_ACTIONS_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload
//       };
//     default:
//       throw new Error(`Unhandled action type: ${type} in userReducer`);
//   }
// };
//
// const INITIAL_STATE = {
//   currentUser: null
// };
//
// export function UserProvider({children}) {
//   const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
//   const {currentUser} = state;
//   const setCurrentUser = useCallback((user) => {
//     dispatch(createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user));
//   }, [dispatch]);
//
//   const value = useMemo(() => ({currentUser, setCurrentUser}), [currentUser, setCurrentUser]);
//
//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserDocumentFromAuth(user);
//       }
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, [currentUser, setCurrentUser]);
//
//   return (
//       <UserContext.Provider value={value}>
//         {children}
//       </UserContext.Provider>
//   );
// }

