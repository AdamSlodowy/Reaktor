import {createStore, combineReducers} from "redux"
import todos, * as fromTodos from "../reducers/todos";


const wrapDispatchWithMiddleware = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware => store.dispatch = middleware(store)(store.dispatch))

};

export const storeConfig = () => {

    const mainReducer = combineReducers({todos});

    const loggerMiddleW = (store) => (next) => {
        if (!console.group) return next;

        return (action) => {
            console.group("Action disptached: ", action.type);
            console.log("%c Previous State: ", "color:brown", store.getState());
            console.log("%c Action details: ", "color:black", action);
            const actionResult = next(action);
            console.log("%c Next State: ", "color:green", store.getState());
            console.groupEnd();
            return actionResult;
        }
    };


    const promiseMiddleW = (store) => (next) => (action) => {
        if (typeof action.then === 'function') { // a way to check if the 'action' is actually a promise
            return action.then(next); // === .then(action=>rawDispatch(action))
        }
        return next(action);
    };

    /// OLD version kept for reference
    // const promiseMiddleW = (store) => {
    //     return (next) => { // next == store.dispatch
    //         return (action) => {
    //             if (typeof action.then === 'function') { // a way to check if the 'action' is actually a promise
    //                 return action.then(next); // === .then(action=>rawDispatch(action))
    //             }
    //             return next(action);
    //         }
    //     }
    // };

    // mainReducer has been replcaced by combineReducers
// const mainReducer = (state = {}, action) => {
//     return {
//         todos: todos(state.todos,action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter,action)
//     }
// };

    const store = createStore(mainReducer);
    const middlewares = [promiseMiddleW];

    if (process.env.NODE_ENV === 'production') {
        middlewares.push(loggerMiddleW);
    }

    wrapDispatchWithMiddleware(store, middlewares);


    // store.subscribe(
    // throttle(() => {
    //     saveState({
    //         todos: store.getState().todos
    //     });
    // }, 5000));

    return store;
};

export const getTodosByFilter = (state, filter) => {
    return fromTodos.getTodosByFilter(state.todos, filter);
};



