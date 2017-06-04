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

const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));


export const fetchTodos = (filter) => {
    return delay(2000).then(() => {

        switch (filter) {
            case CONST.FILTERS.SHOW_ALL:
                return fakeDB.todos;
            case CONST.FILTERS.SHOW_FINISHED:
                return fakeDB.todos.filter((todo) => todo.completed);
            case CONST.FILTERS.SHOW_UNFINISHED:
                return fakeDB.todos.filter((todo) => !todo.completed);
            default:
                throw new Error("Unknown filter used: ", {filter})
        }

    })
};
