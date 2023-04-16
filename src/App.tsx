import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/authentication';
import { Checkout } from './routes/check-out/checkout';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { Shop } from './routes/shop/shop';
import { setCurrentUser } from './store/user/user.actions';
import { createUserDocumentFromAuth, onAuthStateChangedListener, UserData } from './utils/firebase/firebase.utils';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user as unknown as UserData));
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  );
};

export default App;
