import { useSelector } from "react-redux";

function AgeDisplay() {
  const { age, loading } = useSelector((state) => state.age);

  return (
    <div>
      <h1>🎂 Age Tracker</h1>

      <h2>Current Age: {age}</h2>

      {loading && (
        <div
          style={{
            fontSize: "30px",
            marginTop: "10px",
          }}
        >
          ⏳ Loading...
        </div>
      )}
    </div>
  );
}

export default AgeDisplay;
