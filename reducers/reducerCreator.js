import CONST from '../constants';

const idsByFilterReducerCreator = (filter) => {
    return (
        (state = [], action) => {
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
        }
    )
};

export default idsByFilterReducerCreator;

export const getIds = (state) => state;