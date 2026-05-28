import { createSelector } from "@reduxjs/toolkit";

const selectTasks = (state) => state.productivity.tasks;

const selectCategories = (state) => state.productivity.categories;

export const selectTasksByCategory = createSelector(
  [selectTasks, (_, categoryId) => categoryId],

  (tasks, categoryId) => tasks.filter((task) => task.categoryId === categoryId),
);

export const selectCompletedTasks = createSelector(
  [selectTasks],

  (tasks) => tasks.filter((task) => task.completed).length,
);

export const selectCategoryById = createSelector(
  [selectCategories, (_, categoryId) => categoryId],

  (categories, categoryId) =>
    categories.find((category) => category.id === categoryId),
);

export const selectAllCategories = selectCategories;
