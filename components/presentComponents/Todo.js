import React from 'react'

export const Todo = ({todo, onClick}) => {

    return (
        <li
            onClick={()=> onClick(todo.id)}
            style =  {{ textDecoration: todo.completed ? "line-through" : "none"}}
        >
            {todo.text}
        </li>
    )
};
