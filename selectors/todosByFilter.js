import {createSelector} from 'reselect'

const getIds = (state, filter) => state.idsByFilter[filter].ids;
const getTodoById = (state) => state.allTodos;

const getTodosByFilter = (ids, allTodos) => {
    console.log("RECALCULATION!");
    return  ids.map(id => (allTodos[id]));
};

export default createSelector([getIds, getTodoById], getTodosByFilter);
