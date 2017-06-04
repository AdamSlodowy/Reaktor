import CONST from "../constants";
import {combineReducers} from "redux";
import idsByFilterReducerCreator, * as fromIdsByFilter from './reducerCreator';
import allTodos, * as fromAllTodos from './allTodos';


const idsByFilter = combineReducers({
    [CONST.FILTERS.SHOW_ALL]: idsByFilterReducerCreator(CONST.FILTERS.SHOW_ALL),
    [CONST.FILTERS.SHOW_FINISHED]: idsByFilterReducerCreator(CONST.FILTERS.SHOW_FINISHED),
    [CONST.FILTERS.SHOW_UNFINISHED]: idsByFilterReducerCreator(CONST.FILTERS.SHOW_UNFINISHED)
});

const todos = combineReducers({allTodos, idsByFilter});
export default todos;


// selector function - prepares the data to be displayed by UI
export const getTodosByFilter = (state, filter) => {
    let result = fromIdsByFilter.getIds(state.idsByFilter[filter]).map(id => (fromAllTodos.todoById(state.allTodos,id)));
    console.log("Result of getTodosbyFilter", result);
    return result;
};