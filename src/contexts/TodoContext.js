import { createContext, useContext, useReducer } from "react";

// Create context
export const TodoLayerContext = createContext();

// Create provider
export const TodoLayer = ({ initialState, reducer, children }) => {
  return (
    <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </TodoLayerContext.Provider>
  );
};

// Export context to be consumed
export const useTodoLayerValue = () => useContext(TodoLayerContext);
