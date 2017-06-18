import CONST from '../constants';
import {combineReducers} from "redux";

const idsByFilterReducerCreator = (filter) => {

    const handleToggle = (state, action) => {
        const {entities, result: id} = action.todosData;
        const {completed} = entities.todos[id];

        if (completed && filter === CONST.FILTERS.SHOW_UNFINISHED) {
            return state.filter(idFromFitler => idFromFitler !== id);
        } else if (!completed && filter === CONST.FILTERS.SHOW_FINISHED) {
            return state.filter(idFromFitler => idFromFitler !== id);
        } else {
            return state;
        }

        // return ((completed && filter === CONST.FILTERS.SHOW_UNFINISHED) || (!completed && filter === CONST.FILTERS.SHOW_FINISHED)) ?
        //     state.filter(idFromFilter => idFromFilter !== id) :
        //     state;
    };

    const ids = (state = [], action) => {
        switch (action.type) {
            case CONST.RECEIVEDATA:
                return (action.filter === filter) ?
                    Object.keys(action.todosData.entities.todos) : // in this case we could also use action.todosData.result
                    state;
            case CONST.ADD_TODO:
                return filter !== CONST.FILTERS.SHOW_FINISHED ?
                    [...state, action.todosData.result] :
                    state;
            case CONST.TOGGLE_TODO:
                return handleToggle(state, action);
            default:
                return state;
        }
    };
    const isFetching = (state = false, action) => {
        if (action.filter !== filter) {
            return state;
        }
        switch (action.type) {
            case CONST.REQUESTDATA:
                return (
                    true
                );
            case CONST.RECEIVEDATA:
            case CONST.CATCHERROR:
                return (
                    false
                );
            default:
                return state;
        }
    };

    const apiError = (state = null, action) => {
        if (action.filter !== filter) {
            return state;
        }
        switch (action.type) {
            case CONST.CATCHERROR:
                return (
                    action.msg
                );
            case CONST.RECEIVEDATA:
            case CONST.REQUESTDATA:
                return (
                    null
                );
            default:
                return state;
        }
    };

    return combineReducers({ids, isFetching, apiError})
};

export default idsByFilterReducerCreator;

export const getIds = (state) => state.ids;
export const getFetchingStatus = (state) => state.isFetching;
export const getApiError = (state) => state.apiError;