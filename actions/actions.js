import CONST from "../constants";
import uuid from 'node-uuid';
import * as api from "../api/fakeDB";


export const addTodo = (text) => {
    return {
        type: CONST.ADD_TODO,
        text,
        id: uuid.v4()
    }
};

export const toogleTodo = (id) => {
    return {
        type: CONST.TOGGLE_TODO,
        id
    }
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


export const fetchTodos = (filter) => (dispatch) => {
    dispatch(requestTodos(filter));
    return api.fetchTodos(filter).then(data => (dispatch(receiveTodos(data, filter)))); // return here brings a Promise back so it seems wrong?
};









