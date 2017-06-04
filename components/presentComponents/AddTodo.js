import React from 'react'
import {store, CONST} from '../../todoApp'
import {STYLES} from '../../styles/styles'
import {connect} from "react-redux";
import {addTodo} from "../../actions/actions";



 let AddTodo = ({dispatch}) =>{
                 let inputVal;

                 return (
                     <div>
                     <input
                 ref={(node) => {inputVal = node}}
                 />
                 <button
                 onClick ={() => {
                     if(inputVal.value === '') {
                         document.getElementById('error').innerText="You must provide a Todo name!";
                         return
                     }
                     dispatch(addTodo(inputVal.value));
                     inputVal.value = '';
                 }}
                 >
                 Add ToDo
                 </button>
                 <div
                 id="error"
                 style={STYLES.errorMsg}
                 />
                 </div>
                 )

             };


export default AddTodo = connect()(AddTodo);
