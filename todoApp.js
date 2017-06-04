import ReactDOM from 'react-dom';
import React from 'react';
import {fetchTodos} from './api/fakeDB';
import CONST from './constants';


import {Root} from './components/root';
import {storeConfig} from "./components/storeConfig";

const store = storeConfig();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);


// const testAddTodo = () => {
//     const stateBefore = [];
//     const action = {
//         type: CONST.ADD_TODO,
//         id: 0,
//         text : 'check the Redux out'
//     };
//     const stateAfter = [
//         {
//             id: 0,
//             text : 'check the Redux out',
//             completed: false
//         }
//     ];
//
//     deepFreeze(stateBefore);
//     deepFreeze(action);
//
//     expect(todos(stateBefore,action)).toEqual(stateAfter);
// };
//
// const testToggleToDo = () => {
//     const stateBefore = [
//         {
//             id: 0,
//             text: 'whatever',
//             completed: true
//         }
//     ];
//     const stateAfter = [
//         {
//             id: 0,
//             text: 'whatever',
//             completed: false
//         }
//     ];
//     const action = {
//         type: CONST.TOGGLE_TODO,
//         id: 0
//     };
//
//     deepFreeze(stateBefore);
//     deepFreeze(action);
//
//     expect(todos(stateBefore,action)).toEqual(stateAfter);
// };
//
// testAddTodo();
// testToggleToDo();
// console.log("Test passed");

// console.log('TODO added:');
// store.dispatch({
//     type: CONST.ADD_TODO,
//     id:0,
//     text: 'hello'
// });
// console.log('  ','Current state:');
// console.log('  ',store.getState());
// console.log('------');
//
// console.log('Todo toggled')
// store.dispatch({
//     type: CONST.TOGGLE_TODO,
//     id: 0
// })
// console.log('Current state:');
// console.log(store.getState());
// console.log('------');
//
//
// console.log('Filter changed');
// store.dispatch({
//     type: CONST.SET_VISIBILITY_FILTER,
//     filter: "Nowy filtr"
// })
// console.log('Current state:');
// console.log(store.getState());
// console.log('------');





