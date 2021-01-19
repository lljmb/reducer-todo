import React, { useState } from 'react';

const TodoForm = ({setTodo, completeTodo}) => {
    const [newTodo, setNewTodo] = useState('')

    const handleChange = e => {
        setNewTodo(e.target.value)
    }

    const submitTodo = e => {
        e.preventDefault();
        setTodo(newTodo);
        setNewTodo('');
    }
    
return ( 
<div> 
<form onSubmit={submitTodo}>
<input value={newTodo} name='newTodo' onChange={handleChange} type="text" task="item" />
<button onClick={() => {
setTodo(newTodo)
}}>Add Todo</button>
<button onClick={completeTodo} className="clear-btn">
Clear Completed
</button>
</form> 
</div>
)
}

export default TodoForm