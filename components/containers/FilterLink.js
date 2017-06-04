import React from 'react';
import {CONST} from '../../todoApp'
import {Link} from 'react-router'

export const FilterLink = ({filter,children}) => {
    return(
        <Link to={filter}
        activeStyle={{color:'grey'}}
        >
            {children}
        </Link>
    )
};



