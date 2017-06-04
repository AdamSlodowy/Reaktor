import React from 'react';
import AddTodo from '../presentComponents/AddTodo'
import {Footer} from '../presentComponents/Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import {fakeDB} from '../../api/fakeDB'


export const App = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList/>
            <Footer />
            <button onClick={changeBE}>Change BK</button>
        </div>
    )
};

const changeBE = (e) => {
    e.preventDefault();
    console.log(e);
    fakeDB.todos[0].text = 'chaaaanged!';
};