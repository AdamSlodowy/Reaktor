import CONST from "../constants";
import {combineReducers} from "redux";
import idsByFilterReducerCreator, * as fromIdsByFilter from './reducerCreator';
import allTodos, * as fromAllTodos from './allTodos';


const idsByFilter = combineReducers({
    [CONST.FILTERS.SHOW_ALL]: idsByFilterReducerCreator(CONST.FILTERS.SHOW_ALL),
    [CONST.FILTERS.SHOW_FINISHED]: idsByFilterReducerCreator(CONST.FILTERS.SHOW_FINISHED),
    [CONST.FILTERS.SHOW_UNFINISHED]: idsByFilterReducerCreator(CONST.FILTERS.SHOW_UNFINISHED)
});

// export default combineReducers({allTodos, idsByFilter});
// // export default todos;
// //
const mainReducer = (state={},action) => ({
    idsByFilter: idsByFilter(state.idsByFilter, action),
    allTodos: allTodos(state.allTodos, action)
});
export default  mainReducer;



// selector function - prepares the data to be displayed by UI
export const getTodosByFilter = (state, filter) => {
    console.log("Get Todos called!");
    let ids = fromIdsByFilter.getIds(state.idsByFilter[filter]);
    return  ids.map(id => (fromAllTodos.todoById(state.allTodos,id)));

};

// selector for isFetching
export const isFetching = (state, filter) => {
    return fromIdsByFilter.getFetchingStatus(state.idsByFilter[filter]);
};

export const getApiError = (state, filter) => {
    return fromIdsByFilter.getApiError(state.idsByFilter[filter]);
};