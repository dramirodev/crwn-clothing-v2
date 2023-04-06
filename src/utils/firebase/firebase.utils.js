import {initializeApp} from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut
} from 'firebase/auth';
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZSnnfe7inZyCOtdREALmBoSN4I8_P8-c",
  authDomain: "crwn-clothing-db-8b0ab.firebaseapp.com",
  projectId: "crwn-clothing-db-8b0ab",
  storageBucket: "crwn-clothing-db-8b0ab.appspot.com",
  messagingSenderId: "200025753271",
  appId: "1:200025753271:web:64cdafbaaea3bf8c8faf32"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleAuthProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  const {user} = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  const {user} = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signOutAuthUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);