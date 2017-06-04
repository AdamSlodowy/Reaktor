import React from 'react';
import AddTodo from '../presentComponents/AddTodo'
import {Footer} from '../presentComponents/Footer'
import VisibleTodoList from '../containers/VisibleTodoList'


export const App = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList/>
            <Footer />
        </div>
    )
};

