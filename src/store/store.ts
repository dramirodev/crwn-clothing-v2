import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { logger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { rootReducer, RootState } from './root.reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & { blacklist: (keyof RootState)[] };

const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && logger, thunk].filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
