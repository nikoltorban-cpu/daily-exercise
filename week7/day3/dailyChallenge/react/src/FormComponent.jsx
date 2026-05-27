import React from "react";

function FormComponent(props) {
  return (
    <form method="GET">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={props.data.firstName}
        onChange={props.handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={props.data.lastName}
        onChange={props.handleChange}
      />

      <br />
      <br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={props.data.age}
        onChange={props.handleChange}
      />

      <br />
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.data.gender === "male"}
          onChange={props.handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.data.gender === "female"}
          onChange={props.handleChange}
        />
        Female
      </label>

      <br />
      <br />

      <select
        name="destination"
        value={props.data.destination}
        onChange={props.handleChange}
      >
        <option value="">-- Choose a destination --</option>

        <option value="Thailand">Thailand</option>

        <option value="Japan">Japan</option>

        <option value="Brazil">Brazil</option>
      </select>

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          name="nutsFree"
          checked={props.data.nutsFree}
          onChange={props.handleChange}
        />
        Nuts free
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={props.data.lactoseFree}
          onChange={props.handleChange}
        />
        Lactose free
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          name="vegan"
          checked={props.data.vegan}
          onChange={props.handleChange}
        />
        Vegan
      </label>

      <hr />

      <h2>Entered information:</h2>

      <p>
        Your name:
        {props.data.firstName} {props.data.lastName}
      </p>

      <p>
        Your age:
        {props.data.age}
      </p>

      <p>
        Your gender:
        {props.data.gender}
      </p>

      <p>
        Your destination:
        {props.data.destination}
      </p>

      <p>Your dietary restrictions:</p>

      <p>
        Nuts free:
        {props.data.nutsFree ? " Yes" : " No"}
      </p>

      <p>
        Lactose free:
        {props.data.lactoseFree ? " Yes" : " No"}
      </p>

      <p>
        Vegan:
        {props.data.vegan ? " Yes" : " No"}
      </p>
    </form>
  );
}

export default FormComponent;
