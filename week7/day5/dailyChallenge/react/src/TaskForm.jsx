import { useState, useContext } from "react";

import { TaskContext } from "./TaskContext";

function TaskForm() {
  const [task, setTask] = useState("");

  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: task,
    });

    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task..."
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
