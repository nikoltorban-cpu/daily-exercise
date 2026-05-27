import React, { Component } from "react";

import data from "./data2.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h1>Experiences</h1>

        {data.Experiences.map((exp, index) => (
          <div key={index}>
            <h3>{exp.companyName}</h3>

            {exp.roles.map((role, i) => (
              <p key={i}>{role.title}</p>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
