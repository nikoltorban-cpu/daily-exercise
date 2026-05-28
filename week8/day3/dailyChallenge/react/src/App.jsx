import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectDay, addTask, editTask, deleteTask } from "./plannerSlice";

function App() {
  const dispatch = useDispatch();

  const { selectedDay, tasksByDay } = useSelector((state) => state.planner);

  const [taskText, setTaskText] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [editingText, setEditingText] = useState("");

  const tasks = tasksByDay[selectedDay] || [];

  const handleAddTask = () => {
    if (!taskText.trim()) return;

    dispatch(
      addTask({
        day: selectedDay,
        text: taskText,
      }),
    );

    setTaskText("");
  };

  const handleEditTask = (id) => {
    dispatch(
      editTask({
        day: selectedDay,
        id,
        newText: editingText,
      }),
    );

    setEditingId(null);

    setEditingText("");
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1>📅 Daily Planner</h1>

      <input
        type="date"
        value={selectedDay}
        onChange={(e) => dispatch(selectDay(e.target.value))}
      />

      <hr />

      <h2>Tasks for {selectedDay}</h2>

      <input
        type="text"
        placeholder="New task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />

      <button onClick={handleAddTask}>Add Task</button>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        {tasks.length === 0 ? (
          <p>No tasks for this day.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              style={{
                border: "1px solid gray",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              {editingId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />

                  <button onClick={() => handleEditTask(task.id)}>Save</button>
                </>
              ) : (
                <>
                  <p>{task.text}</p>

                  <button
                    onClick={() => {
                      setEditingId(task.id);

                      setEditingText(task.text);
                    }}
                  >
                    Edit
                  </button>
                </>
              )}

              <button
                onClick={() =>
                  dispatch(
                    deleteTask({
                      day: selectedDay,
                      id: task.id,
                    }),
                  )
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
