import {createContext, useEffect, useMemo, useState} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export function UserProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);
  const value = useMemo(() => ({currentUser, setCurrentUser}), [currentUser, setCurrentUser]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, [currentUser]);

  return (
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
  );
}