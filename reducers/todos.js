import CONST from "../constants";
import {combineReducers} from "redux";

const allTodos = (state = {}, action) => {
    switch (action.type) {
        case CONST.RECEIVEDATA:
            let dataToMergeWithState = {};
            action.todosData.forEach(function(todo){dataToMergeWithState[todo.id]=todo});
            return {
                ...state,
                ...dataToMergeWithState
            };
        default:
            return state;
    }
};


const allIds = (state=[],action) => {
    if (action.filter !== CONST.FILTERS.SHOW_ALL) {
        return state;
    }
    switch (action.type) {
        case CONST.RECEIVEDATA:
            let idsToAdd = action.todosData.map((todo) => todo.id );
            return [
                ...idsToAdd
            ];
        default:
            return state;
    }
};

const completeIds = (state=[],action) => {
    if (action.filter !== CONST.FILTERS.SHOW_FINISHED) {
        return state;
    }
    switch (action.type) {
        case CONST.RECEIVEDATA:
            let idsToAdd = action.todosData.map((todo) => todo.id );
            return [
                ...idsToAdd
            ];
        default:
            return state;
    }
};

const uncompletedIds = (state=[],action) => {
    if (action.filter !== CONST.FILTERS.SHOW_UNFINISHED) {
        return state;
    }
    switch (action.type) {
        case CONST.RECEIVEDATA:
            return (
                action.todosData.map(todo => todo.id)
            );
        default:
            return state;
    }
};

const idsByFilter = combineReducers({
    [CONST.FILTERS.SHOW_ALL]: allIds,
    [CONST.FILTERS.SHOW_FINISHED]: completeIds,
    [CONST.FILTERS.SHOW_UNFINISHED]: uncompletedIds
});

const todos = combineReducers({allTodos, idsByFilter});
export default todos;


// selector function - prepares the data to be displayed by UI
export const getTodosByFilter = (state, filter) => {
    let result = [];
    state.idsByFilter[filter].map(id => result.push(state.allTodos[id]));
    console.log("Result of getTodosbyFilter", result);
    return result;
};