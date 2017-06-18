import CONST from '../constants';

const allTodos = (state = {}, action) => {
    switch (action.type) {
        case CONST.RECEIVEDATA:
        case CONST.ADD_TODO:
        case CONST.TOGGLE_TODO:
            return {
                ...state,
                ...action.todosData.entities.todos
            };
        default:
            return state;
    }
};

export default allTodos;
export const todoById = (state, id) => state[id];
