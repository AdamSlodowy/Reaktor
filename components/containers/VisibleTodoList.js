import React from 'react';
import {connect} from 'react-redux';
import {TodoList} from '../presentComponents/TodoList'
import * as actions from "../../actions/actions";
import {withRouter} from 'react-router';
import CONST from '../../constants'
import {getApiError} from "../../reducers/index";
import {isFetching} from "../../reducers/index";
import Error from "../presentComponents/Error";
import getTodosByFilter from "../../selectors/todosByFilter"

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

    fetchData = () => {
        const {filter, fetchTodos} = this.props;
        fetchTodos(filter);
    };

    render() {
        const {toggleTodo, isFetching, todos, apiError, ...rest} = this.props;


        return (
            <div>
                {(apiError && !todos.length) ?
                    <Error onRetry={this.fetchData} errorMsg={apiError}/> :
                    (isFetching && !todos.length) ?
                        <p> Loading... </p> :
                        <TodoList
                            onClick={toggleTodo}
                            todos={todos}
                        />
                }
            </div>
        )
    }

}

let x =0;
const mapStateToProps = (state, {params}) => {

    console.log("MSTP called ", x++, " time");
    const filter = params.filter || CONST.FILTERS.SHOW_ALL;
    return {
        todos: getTodosByFilter(state, filter),
        isFetching: isFetching(state, filter),
        filter,
        apiError: getApiError(state, filter)
    }
};
// const mapDispatchToProps = (dispatch) => {           >
//     return {                                         >
//         toggleTodo: (id) => {                        >  toggleTodo: toggleTodo ---> toggleTodo (ES6)
//             return dispatch(toggleTodo(id))          >
//         }                                            >
//     }                                                >
// };
///// The above can be replaced by: {onClick: toggleTodo } // config object sent instead of the mapDispatch... https://goo.gl/uNMzVh


// export const VisibleTodoList = withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
VisibleTodoList = withRouter(connect(mapStateToProps, actions)(VisibleTodoList));

export default VisibleTodoList;