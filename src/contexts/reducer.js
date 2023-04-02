export const initialState = {
  todos: [
    {
      id: 0,
      content: "Ben ilk todoyum",
    },
  ],
};

// Reducers are pure functions and does not have side effects
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TODO":
      return { ...state };

    default:
      return { ...state };
  }
};

export default reducer;
