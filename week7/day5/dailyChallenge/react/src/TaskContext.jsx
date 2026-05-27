import { createContext, useReducer } from "react";

import { taskReducer, initialState } from "./TaskReducer";

export const TaskContext = createContext();

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
