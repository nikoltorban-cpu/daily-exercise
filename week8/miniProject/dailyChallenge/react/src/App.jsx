import { useState } from "react";

import "./App.css";

function App() {
  const [num1, setNum1] = useState("");

  const [num2, setNum2] = useState("");

  const [result, setResult] = useState(0);

  const [operation, setOperation] = useState("add");

  const calculate = () => {
    const number1 = Number(num1);
    const number2 = Number(num2);

    let answer = 0;

    switch (operation) {
      case "add":
        answer = number1 + number2;
        break;

      case "subtract":
        answer = number1 - number2;
        break;

      case "multiply":
        answer = number1 * number2;
        break;

      case "divide":
        answer = number2 !== 0 ? number1 / number2 : "Cannot divide by 0";

        break;

      default:
        answer = 0;
    }

    setResult(answer);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>React Calculator</h1>

      <input
        type="number"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />
      <br />

      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Addition (+)</option>

        <option value="subtract">Subtraction (-)</option>

        <option value="multiply">Multiplication (*)</option>

        <option value="divide">Division (/)</option>
      </select>

      <br />
      <br />

      <button onClick={calculate}>Calculate</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
