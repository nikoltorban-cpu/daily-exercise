import { useState } from "react";

import CategorySelector from "./components/CategorySelector";

import TaskList from "./components/TaskList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1>🚀 Productivity Tracker</h1>

      <CategorySelector
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <TaskList selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
