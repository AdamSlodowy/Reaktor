import React from 'react';
import CONST from '../../constants'
import {FilterLink} from '../containers/FilterLink'
import {fakeDB} from '../../api/fakeDB'

export const Footer = () => {
    return (
        <div>
            <FilterLink
                filter = {CONST.FILTERS.SHOW_ALL}
            >
                Show All
            </FilterLink>
            {' '}
            {'-'}
            {' '}
            <FilterLink
                filter = {CONST.FILTERS.SHOW_UNFINISHED}
            >
                Show unfinished
            </FilterLink>
            {' '}
            {'-'}
            {' '}
            <FilterLink
                filter = {CONST.FILTERS.SHOW_FINISHED}
            >
                Show finished
            </FilterLink>
            <button onClick={changeBE}>Change BK</button>
        </div>
    )
};

const changeBE = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    fakeDB.todos[0].text = 'chaaaanged!';
};