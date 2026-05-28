import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: 1,
      name: "Work",
    },

    {
      id: 2,
      name: "Study",
    },

    {
      id: 3,
      name: "Personal",
    },
  ],

  tasks: [
    {
      id: 1,
      text: "Finish Redux project",
      categoryId: 1,
      completed: false,
    },

    {
      id: 2,
      text: "Study React hooks",
      categoryId: 2,
      completed: true,
    },

    {
      id: 3,
      text: "Go to gym",
      categoryId: 3,
      completed: false,
    },
  ],
};

const productivitySlice = createSlice({
  name: "productivity",

  initialState,

  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    editTask: (state, action) => {
      const { id, text } = action.payload;

      const task = state.tasks.find((task) => task.id === id);

      if (task) {
        task.text = text;
      }
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);

      if (task) {
        task.completed = !task.completed;
      }
    },

    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },

    editCategory: (state, action) => {
      const { id, name } = action.payload;

      const category = state.categories.find((category) => category.id === id);

      if (category) {
        category.name = name;
      }
    },

    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload,
      );
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompletion,

  addCategory,
  editCategory,
  deleteCategory,
} = productivitySlice.actions;

export default productivitySlice.reducer;
