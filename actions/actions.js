import CONST from "../constants";
import * as api from "../api/fakeDB";
import {isFetching} from "../reducers/index";
import {normalize} from 'normalizr';
import * as schemas from './schemas';


export const addTodo = (text) => (dispatch) => {
    api.addTodo(text).then((todo) => {
        dispatch({
            type: CONST.ADD_TODO,
            todosData : normalize(todo, schemas.todo)
        })
    })
};

export const toggleTodo = (id) => (dispatch) => {
    api.toggleTodo(id).then((todo) => {
        dispatch({
            type: CONST.TOGGLE_TODO,
            todosData : normalize(todo, schemas.todo)
        })
    })

};

const receiveTodos = (todosData, filter) => {
    return {
        type: CONST.RECEIVEDATA,
        filter,
        todosData
    }
};

const requestTodos = (filter) => ({
    type: CONST.REQUESTDATA,
    filter
});

const apiError = (error, filter) => {
    return {
        type: CONST.CATCHERROR,
        msg: error.message || 'The API call did not work (error falback msg',
        filter
    }
};


export const fetchTodos = (filter) => (dispatch, getState) => {
    if (isFetching(getState(), filter)) {
        console.log("Excessive api call prevented!");
        return;
    }
    dispatch(requestTodos(filter));
    return api.fetchTodos(filter).then(

        data => {
            console.log("normalized data from DB: ", normalize(data, schemas.arrayOfTodos ));
            return dispatch(receiveTodos(normalize(data, schemas.arrayOfTodos), filter))
        },
        error => (dispatch(apiError(error, filter)))
    );
};











