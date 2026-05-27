import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "white" : "#222",

    color: theme === "light" ? "black" : "white",

    padding: "20px",
    minHeight: "100vh",
  };

  return (
    <div style={styles}>
      <h1>Current Theme: {theme}</h1>

      <p>This component changes style using useContext.</p>
    </div>
  );
}

export default Content;
