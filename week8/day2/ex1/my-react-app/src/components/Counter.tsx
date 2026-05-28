import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [lastAction, setLastAction] = useState<string>("None");

  const increment = (): void => {
    setCount((prev) => prev + 1);
    setLastAction("Incremented");
  };

  const decrement = (): void => {
    setCount((prev) => prev - 1);
    setLastAction("Decremented");
  };

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <p>Last Action: {lastAction}</p>
    </div>
  );
}

export default Counter;
