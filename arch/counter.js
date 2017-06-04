
const CONST = {
    INCREMENT : "INCREMENT",
    DECREMENT : "DECREMENT"
};

import ReactDom from  "react-dom"
import React from "react"
import deepFreeze from "deep-freeze"

const counter = (state, action) => {
    switch (action.type) {
        case CONST.INCREMENT :
            return state + 0.1;
        case CONST.DECREMENT :
            return state - 0.1;
        default:
            return state;
    }
};

const addCounter = (counterList) => {
  return [...counterList,0]
};

const removeCounter = (counterList,index) => {
    return [
        ...counterList.slice(0,index),
        ...counterList.slice(index+1)
    ];
};

const createStore = (reducer) => {
    let state = {
        counterList: []
    };
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener()); // Fire every listener
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }

    };

    dispatch({});

    return {getState, dispatch, subscribe}

};

const store = createStore(counter);

function CounterReact(props) {
        return (
            <div>
            <h1>{props.value}</h1>
            <button onClick={props.increment}>Add</button>
            <button onClick={props.decrement}>Subtract</button>
            </div>
)}

const render = () => {
    ReactDom.render(
        <CounterReact
            value={store.getState()}
            increment={() => store.dispatch({type: CONST.INCREMENT})}
            decrement={() => store.dispatch({type: CONST.DECREMENT})}
        />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();