import CONST from '../constants';
import {combineReducers} from "redux";

const idsByFilterReducerCreator = (filter) => {
    const ids = (state = [], action) => {
        if (action.filter !== filter) {
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

    return  combineReducers({ids, isFetching, apiError})
};

    export default idsByFilterReducerCreator;

    export const getIds = (state) => state.ids;
    export const getFetchingStatus = (state) => state.isFetching;
    export const getApiError = (state) => state.apiError;