import React from 'react'
import {Todo} from './Todo'


export const TodoList = ({todos, onClick}) => {
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <Todo
                        key = {todo.id}
                        todo = {todo}
                        onClick = {onClick}
                    />
                )
            }
            )}
        </ul>
    )
};