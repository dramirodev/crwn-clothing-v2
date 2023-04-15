import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  type User,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  type QueryDocumentSnapshot,
  setDoc,
  writeBatch
} from 'firebase/firestore';
import { Category } from '../../store/categories/categories.types';

const firebaseConfig = {
  apiKey: 'AIzaSyAZSnnfe7inZyCOtdREALmBoSN4I8_P8-c',
  authDomain: 'crwn-clothing-db-8b0ab.firebaseapp.com',
  projectId: 'crwn-clothing-db-8b0ab',
  storageBucket: 'crwn-clothing-db-8b0ab.appspot.com',
  messagingSenderId: '200025753271',
  appId: '1:200025753271:web:64cdafbaaea3bf8c8faf32'
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

export type ObjectToAdd = {
  title: string,
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd> (collectionKey: string, objectsToAdd: T[]): Promise<void> => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export type AdditionalInformation = {
  displayName?: string,
}

export type UserData = {
  displayName: string,
  createdAt: Date,
  email: string,
}
export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation): Promise<QueryDocumentSnapshot<UserData>> => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {
      displayName,
      email
    } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }

  return userDocRef as unknown as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) {
    return;
  }

  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) {
    return;
  }

  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signOutAuthUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const categoriesRef = collection(db, 'categories');
  const q = query(categoriesRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => doc.data() as Category);
};

