const todoReducer = (state, action) => {
  switch (action.type) {
    // Add a new todo to the list
    case 'ADD_TODO':
      return [...state, action.payload];

    // Remove a todo by ID
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);

    // Toggle the completion status of a todo
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    // Edit the text of a specific todo
    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    // Return the current state by default
    default:
      return state;
  }
};

export default todoReducer;
