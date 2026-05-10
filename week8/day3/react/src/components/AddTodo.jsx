import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

function AddTodo() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleAddTodo() {
        if(text.trim() === "") return;
        dispatch(addTodo(text));
        setText("");
    }

    return (
        <div>
            <input 
              type="text"
              placeholder="Add todo.."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}

export default AddTodo;