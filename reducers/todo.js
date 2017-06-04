import CONST from "../constants";

export const todo = (state = {}, action) => {
    switch (action.type) {
        case CONST.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case CONST.TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;

    }
};