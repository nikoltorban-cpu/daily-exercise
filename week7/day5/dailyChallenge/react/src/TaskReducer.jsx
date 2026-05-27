export const initialState = {
  tasks: [],

  filter: "all",
};

export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,

        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case "TOGGLE_TASK":
      return {
        ...state,

        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                completed: !task.completed,
              }
            : task,
        ),
      };

    case "EDIT_TASK":
      return {
        ...state,

        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                text: action.payload.text,
              }
            : task,
        ),
      };

    case "FILTER_TASKS":
      return {
        ...state,

        filter: action.payload,
      };

    default:
      return state;
  }
}
