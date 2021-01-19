import React from 'react';
import { completedTodo } from '../actions';

export default function Todo(props) {
    const { state, dispatch } = props;

    const handleClick = e => {
      dispatch(completedTodo(true))
    }

    return (
      <div>
        {state.todos.map(todo => (
          <div onClick={handleClick} key={todo.id}>
            <p>{todo.item}</p>
          </div>
        ))}
      </div>
    );
  }