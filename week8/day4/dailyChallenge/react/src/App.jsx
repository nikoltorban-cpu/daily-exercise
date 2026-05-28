import AgeDisplay from "./components/AgeDisplay";

import AgeControls from "./components/AgeControls";

function App() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <AgeDisplay />

      <AgeControls />
    </div>
  );
}

export default App;
