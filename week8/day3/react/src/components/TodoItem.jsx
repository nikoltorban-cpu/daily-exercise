import { useDispatch }
from "react-redux";

import {
  toggleTodo,
  removeTodo
}
from "../redux/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span
        onClick={() =>
          dispatch(toggleTodo(todo.id))
        }
        style={{
          textDecoration:
            todo.completed
              ? "line-through"
              : "none",
          cursor: "pointer",
          marginRight: "10px"

        }}

      >
        {todo.text}
      </span>
      <button
        onClick={() =>
          dispatch(removeTodo(todo.id))
        }
      >
        Remove
      </button>
    </li>
  );
}

export default TodoItem;