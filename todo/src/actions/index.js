export const ADD_TODO = 'ADD_TODO';
export const SET_COMPLETED = 'SET_COMPLETED';
export const SET_TODO = 'SET_TODO';
export const CLEAR_TODO = 'CLEAR_TODO'

export const addTodo = (todo) => {
    const newTodo = { todo, id: new Date(), completed: false}
    return({type: ADD_TODO, payload: newTodo})
}

export const setTodo = (todo) => {
    return({type: SET_TODO, payload: todo})
}

export const setCompleted = (completed) => {
    return({type: SET_COMPLETED, payload: completed})
}

export const clearTodo = () => {
    return({type: CLEAR_TODO })
}