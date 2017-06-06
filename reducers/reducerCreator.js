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
            case CONST.RECEIVEDATA:
                return false;
            case CONST.REQUESTDATA:
                return true;
            default:
                return state;
        }
    };

    return combineReducers({ids, isFetching});

};

export default idsByFilterReducerCreator;

export const getIds = (state) => state.ids;
export const getFetching = (state) => state.isFetching;