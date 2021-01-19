export const initialState = [
  {  todo: 
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    setNewTodo: ''
    }
},
]

// reducer takes two args: current state & action obj
const reducer = (state, action) => {
    switch(action.type){
        case('ADD_TODO'):
        // make a copy of current state & change the value of todo item
             return({...state, setNewTodo: action.payload});
        case('SET_TODO'):
        // make a copy of current state & change the value of todo item
              return({...state, item: action.payload});
        case('SET_COMPLETED'):
            return({...state, completed: action.payload});
        case('SET_NEW_ID'):
            return({...state, id: Math.random()});
        case ('CLEAR_COMPLETED'):
                return { ...state, currentValue: 0 };
        default: 
             return(state); 
    };
};

export default reducer