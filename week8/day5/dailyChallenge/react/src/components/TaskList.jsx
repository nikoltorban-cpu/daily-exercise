import { useSelector, useDispatch } from "react-redux";

import { useCallback } from "react";

import {
  selectTasksByCategory,
  selectCompletedTasks,
} from "../selectors/selectors";

import {
  editTask,
  toggleTaskCompletion,
} from "../features/productivity/productivitySlice";

function TaskList({ selectedCategory }) {
  const dispatch = useDispatch();

  const tasks = useSelector((state) =>
    selectTasksByCategory(state, selectedCategory),
  );

  const completedCount = useSelector(selectCompletedTasks);

  const handleToggle = useCallback(
    (id) => {
      dispatch(toggleTaskCompletion(id));
    },

    [dispatch],
  );

  const handleEdit = useCallback(
    (id) => {
      const newText = prompt("Edit task:");

      if (newText) {
        dispatch(
          editTask({
            id,
            text: newText,
          }),
        );
      }
    },

    [dispatch],
  );

  return (
    <div>
      <h2>Tasks</h2>

      <p>✅ Completed Tasks: {completedCount}</p>

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{task.text}</h3>

          <p>Status: {task.completed ? "Completed" : "Pending"}</p>

          <button onClick={() => handleToggle(task.id)}>Toggle Complete</button>

          <button
            onClick={() => handleEdit(task.id)}
            style={{
              marginLeft: "10px",
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
