import {createStore, combineReducers, applyMiddleware} from "redux"
import promiseMiddleware  from 'redux-promise';
import logger from 'redux-logger';
import mainReducer from "../reducers/index";

export const storeConfig = () => {

    const thunk = (store) => (next) => (action) => {
        if (typeof action === 'function') {
            action(next, store.getState);
        } else {
            next(action);
        }
    };

    const middlewares = [thunk];

    if (process.env.NODE_ENV === 'production') {
        middlewares.push(logger);
    }


    // store.subscribe(
    // throttle(() => {
    //     saveState({
    //         todos: store.getState().todos
    //     });
    // }, 5000));
    return createStore(mainReducer, applyMiddleware(...middlewares));

};




