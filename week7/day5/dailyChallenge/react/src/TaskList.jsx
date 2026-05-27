import { useContext } from "react";

import { TaskContext } from "./TaskContext";

import TaskItem from "./TaskItem";

function TaskList() {
  const { state, dispatch } = useContext(TaskContext);

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "completed") {
      return task.completed;
    }

    if (state.filter === "active") {
      return !task.completed;
    }

    return true;
  });

  return (
    <div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "FILTER_TASKS",
              payload: "all",
            })
          }
        >
          All
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "FILTER_TASKS",
              payload: "completed",
            })
          }
        >
          Completed
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "FILTER_TASKS",
              payload: "active",
            })
          }
        >
          Active
        </button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
