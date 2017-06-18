import uuid from 'node-uuid';
import CONST from '../constants';
import _ from 'lodash';

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
    todos.map(todo => ({id: todo.id, completed: todo.completed, text: todo.text})); // this cloning to be 100% accurate would have to cover the uuid object too


const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));


export const fetchTodos = (filter) => {
    return delay(1000).then(() => {
        if(Math.random()> 0.8) {
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

export const addTodo = (text) => {
    return delay(500).then(()=>{
        const newTodo = {
            id: uuid.v4(),
            completed: false,
            text
        };
        fakeDB.todos.push(newTodo);
        return newTodo;
    })
};

export const toggleTodo = (id) => {
    return delay(500).then(() => {
        let toggledTodo = _.find(fakeDB.todos, (todo) => todo.id === id);
        toggledTodo.completed = !toggledTodo.completed;

        // fakeDB.todos.forEach((curTodo)=>{if(curTodo.id === id) {
        //     curTodo.completed = !curTodo.completed;
        //     toggledTodo = curTodo;
        // }
        // });
        return toggledTodo;
    })
};
