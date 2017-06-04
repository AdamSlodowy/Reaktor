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
        default:
            return state;
    }
};

export default allTodos;
export const todoById = (state,id) => state[id];
