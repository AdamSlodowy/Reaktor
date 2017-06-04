import React from 'react';
import CONST from '../../constants'
import {FilterLink} from '../containers/FilterLink'

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
        </div>
    )
};