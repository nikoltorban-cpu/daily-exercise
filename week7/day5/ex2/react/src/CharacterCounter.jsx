import { useRef, useState } from "react";

function CharacterCounter() {
  const inputRef = useRef();

  const [count, setCount] = useState(0);

  const handleInput = () => {
    const length = inputRef.current.value.length;

    setCount(length);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Character Counter</h1>

      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Type here..."
      />

      <p>Characters: {count}</p>
    </div>
  );
}

export default CharacterCounter;
