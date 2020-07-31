import React, { useState, useReducer } from 'react';
 import { initialList, reducer } from './reducers/reducer'
 import Form from './components/Form'
 import Display from './components/Display'
 import './App.css'

 function App() {
   const [state, dispatch] = useReducer(reducer, initialList);
   const [taskInput, setTaskInput] = useState('')

   const inputChange = event => {
     event.preventDefault();
     setTaskInput(event.target.value)
   }

   const taskSubmit = event => {
     event.preventDefault();
     dispatch({ type: "ADD_TASK", payload: taskInput})
     // setTaskInput("")
   }

   const toggleItem = item => {
     dispatch({ type: "TOGGLE_IT", payload: item })
   }

   const clearCompleted = event => {
     event.preventDefault();
     dispatch({ type: "CLEAR_ALL" })
   }
   return (
     <div className="App">
       <div className="header">
         <h1>Things to do</h1>
         <Form
           taskSubmit={taskSubmit}
           clearCompleted={clearCompleted}
           inputChange={inputChange}
           state={state}
         />
       </div>
       <Display
         state={state}
         toggleItem={toggleItem}
       />
     </div>
   )

 }

 export default App;