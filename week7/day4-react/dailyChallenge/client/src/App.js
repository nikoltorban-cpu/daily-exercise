import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "",
      input: "",
      responseMessage: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:5000/api/hello");

      const data = await response.json();

      this.setState({
        message: data.message,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/world", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          input: this.state.input,
        }),
      });

      const data = await response.json();

      this.setState({
        responseMessage: data.message,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Type something"
          />

          <button type="submit">Submit</button>
        </form>

        <h2>{this.state.responseMessage}</h2>
      </div>
    );
  }
}

export default App;
