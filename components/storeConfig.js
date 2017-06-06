import {createStore, combineReducers, applyMiddleware} from "redux"
import promiseMiddleware  from 'redux-promise';
import logger from 'redux-logger';
import mainReducer, * as fromTodos from "../reducers/index";


export const storeConfig = () => {

    // const mainReducer = mainReducer;


    const middlewares = [promiseMiddleware];

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




