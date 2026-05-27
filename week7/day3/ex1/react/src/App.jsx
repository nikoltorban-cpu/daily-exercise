import React from "react";
import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function App() {
  return;
  <>
    <div>
      <ErrorBoundary>
        <BuggyCounter />

        <BuggyCounter />
      </ErrorBoundary>
    </div>

    <div>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>

    <div>
      <BuggyCounter />
    </div>
  </>;
}

export default App;
