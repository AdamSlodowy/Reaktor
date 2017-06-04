import React from 'react';
import {App} from './containers/App';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router'


export const Root = ({store}) => {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path='/(:filter)' component={App}></Route>
            </Router>
        </Provider>
    )
};