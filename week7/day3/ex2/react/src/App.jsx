import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteColor: "red",
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoriteColor: "yellow",
      });
    }, 3000);
  }

  componentDidUpdate() {
    console.log("after update");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");

    return null;
  }

  changeColor = () => {
    this.setState({
      favoriteColor: "blue",
    });
  };

  render() {
    return (
      <div>
        <h1>
          My favorite color is
          {this.state.favoriteColor}
        </h1>

        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default App;
