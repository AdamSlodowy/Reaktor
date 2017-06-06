import React from 'react';
import {connect} from 'react-redux';
import {TodoList} from '../presentComponents/TodoList'
import * as actions from "../../actions/actions";
import {withRouter} from 'react-router';
import CONST from '../../constants'
import {getTodosByFilter, getFetchingStatus} from "../../reducers/index";


class VisibleTodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filter !== this.props.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const {filter,fetchTodos,requestTodos} = this.props;
        requestTodos(filter);
        fetchTodos(filter);
    }

    render() {
        const {toogleTodo,isFetching,todos} = this.props;
        return(
            (isFetching && !todos.length) ?
                <p> Loading... :) </p> :

                <TodoList
                    onClick={toogleTodo}
                    todos = {todos}
                />
        )


    }

}

const mapStateToProps = (state, {params}) => {

    const filter = params.filter || CONST.FILTERS.SHOW_ALL;
    return {
        todos: getTodosByFilter(state, filter),
        isFetching: getFetchingStatus(state,filter),
        filter
    }
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onClick: (id) => {
//             return dispatch(toogleTodo(id))
//         }
//     }
// };
///// The above can be replaced by: {onClick: toogleTodo } // config object sent instead of the mapDispatch... https://goo.gl/uNMzVh


// export const VisibleTodoList = withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
VisibleTodoList = withRouter(connect(mapStateToProps, actions)(VisibleTodoList));

export default VisibleTodoList;