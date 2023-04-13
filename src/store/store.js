import {applyMiddleware, compose, createStore} from "redux";
import {logger} from "redux-logger/src";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {rootReducer} from "./root.reducer";

const persistConfig = {
  key: 'root', storage, blacklist: ['user']
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);