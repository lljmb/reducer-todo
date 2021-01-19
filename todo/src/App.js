
import './App.css';
import React, { useReducer } from 'react';
import reducer, {initialState} from './reducers'
import { addTodo, setTodo, setCompleted } from './actions'
import TodoForm from './TodoForm'

let currentState = reducer(initialState)
console.log(currentState)

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChanges = e => {
    dispatch(addTodo(e.target.value))
  }

  const handleClick = todo => { 
    dispatch(setCompleted(todo))
  }

  // const completedTodo = () => {
  // dispatch(clearTodo())
  // }

  return (
    <div className="App">
      <TodoForm handleChanges={handleChanges} handleClick={handleClick}/>
    </div>
  );
}

export default App;
