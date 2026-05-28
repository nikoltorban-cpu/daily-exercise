import { useDispatch } from "react-redux";

import { ageUpAsync, ageDownAsync } from "../features/age/ageSlice";

function AgeControls() {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>

      <button
        onClick={() => dispatch(ageDownAsync())}
        style={{
          marginLeft: "10px",
        }}
      >
        Age Down
      </button>
    </div>
  );
}

export default AgeControls;
