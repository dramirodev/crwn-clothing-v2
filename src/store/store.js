// root reducer

import {applyMiddleware, compose, createStore} from "redux";
import {logger} from "redux-logger/src";
import {rootReducer} from "./root.reducer";

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);