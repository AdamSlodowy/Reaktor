import uuid from 'node-uuid';
import CONST from '../constants';

export const fakeDB = {
    todos: [{
        id: uuid.v4(),
        completed: false,
        text: 'hello'
    }, {
        id: uuid.v4(),
        completed: false,
        text: 'keep going with Redux'
    }, {
        id: uuid.v4(),
        completed: true,
        text: 'be nice to people'
    },
    ]
};

const cloneTodos = (todos) =>
    todos.map(todo => ({id: todo.id, completed: todo.completed, text: todo.text}));


const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));


export const fetchTodos = (filter) => {
    return delay(1000).then(() => {
        if(Math.random()> 0.5) {
            throw Error("Backend rzuca błąd!");
        }
        switch (filter) {
            case CONST.FILTERS.SHOW_ALL:
                return cloneTodos(fakeDB.todos);
            case CONST.FILTERS.SHOW_FINISHED:
                return cloneTodos(fakeDB.todos.filter((todo) => todo.completed));
            case CONST.FILTERS.SHOW_UNFINISHED:
                return cloneTodos(fakeDB.todos.filter((todo) => !todo.completed));
            default:
                throw new Error("Unknown filter used: ", {filter})
        }

    })
};
