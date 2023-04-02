export const initialState = {
  todos: [],
};

// Reducers are pure functions and does not have side effects
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    // Add todo to todo list
    case "ADD_TODO":
      return { ...state, todos: [action.payload, ...state.todos] };

    // Remove todo from todo list
    case "REMOVE_TODO":
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== action.payload),
      };

    // Mark todo as completed
    case "COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }

          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }),
      };

    // Update todo
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.todoId) {
            return todo;
          }

          return {
            ...todo,
            content: action.payload.newValue,
          };
        }),
      };

    default:
      return { ...state };
  }
};

export default reducer;
