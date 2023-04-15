// import {persistReducer, persistStore} from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import {rootReducer} from "./root.reducer";
//
// const persistConfig = {
//   key: 'root', storage,
//   blacklist: ['user']
// };
//
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);
//

//
// const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));
// export const store = createStore(persistedReducer, undefined, composedEnhancers);
//
// export const persistor = persistStore(store);

import {configureStore} from '@reduxjs/toolkit';
import {logger} from "redux-logger/src";
import {rootReducer} from "./root.reducer";

const middleWares = [process.env.NODE_ENV === 'development' && logger,].filter(Boolean);

export const store = configureStore({
  reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
});