import { useContext, useRef, useState } from "react";

import { TaskContext } from "./TaskContext";

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  const [editing, setEditing] = useState(false);

  const editRef = useRef();

  const toggleTask = () => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: task.id,
    });
  };

  const saveEdit = () => {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        id: task.id,
        text: editRef.current.value,
      },
    });

    setEditing(false);
  };

  return (
    <li>
      <span
        onClick={toggleTask}
        style={{
          textDecoration: task.completed ? "line-through" : "none",

          cursor: "pointer",
        }}
      >
        {task.text}
      </span>{" "}
      {editing ? (
        <>
          <input type="text" defaultValue={task.text} ref={editRef} />

          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <button onClick={() => setEditing(true)}>Edit</button>
      )}
    </li>
  );
}

export default TaskItem;
