import React from 'react'

 const Form = props => {


     return (
         <div>
             <form >
                 <input type="search"
                     value={props.taskInput}
                     name="taskInput"
                     onChange={props.inputChange}
                     placeholder={'New todo'}
                 />
                 <button onClick={event => {props.taskSubmit(event)}}>Add Todo</button>
                 <button onClick={event => {props.clearCompleted(event)}}>Clear Completed</button>
             </form>
         </div>
     )
 }

 export default Form