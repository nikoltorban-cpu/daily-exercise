import React, { Component } from "react";

import data from "./data2.json";

class Example2 extends Component {
  render() {
    return (
      <div>
        <h1>Skills</h1>

        {data.Skills.map((skill, index) => (
          <div key={index}>
            <h3>{skill.Area}</h3>

            {skill.SkillSet.map((item, i) => (
              <p key={i}>{item.Name}</p>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
