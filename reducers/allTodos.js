import CONST from '../constants';

const allTodos = (state = {}, action) => {
    switch (action.type) {
        case CONST.RECEIVEDATA:
            let dataToMergeWithState = {};
            action.todosData.forEach(function (todo) {
                dataToMergeWithState[todo.id] = todo
            });
            return {
                ...state,
                ...dataToMergeWithState
            };
        case CONST.ADD_TODO:
            return {
                ...state,
                [action.todo.id]: action.todo
            };
        case CONST.TOGGLE_TODO:
            let toDoToToggle = state[action.todo.id];
            let updatedToDo = {
                id: toDoToToggle.id,
                text: toDoToToggle.text,
                completed: toDoToToggle.completed
            };
            updatedToDo.completed = !toDoToToggle.completed;
            return {
                ...state,
                [action.todo.id]: updatedToDo
            };
        default:
            return state;
    }
};

export default allTodos;
export const todoById = (state, id) => state[id];
