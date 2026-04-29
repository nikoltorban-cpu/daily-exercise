import React, {Component} from "react";
import "./Exercise.css";

class Exercise extends Component {
    render() {
        const style_header = {
          color: "white",
          backgroundColor: "DodgerBlue",
          padding: "10px",
          fontFamily: "Arial"
        };
        return(
            <div>
                <h1 style={style_header}>
                    Such an amazing day!!
                </h1>

                <p className="para">Look out at the sun</p>

                <a href="https://img.magnific.com/premium-vector/vibrant-cartoon-setting-features-smiling-sun-blooming-flowers-cozy-house-sunny-day-sunny-day-customizable-cartoon-illustration_538213-142632.jpg" target="_blank">Look at me!</a>

                <form>
                    <p>What's up today?</p>
                    <input placeholder="type here.."></input>
                    <button>Submit</button>
                </form>

                <h5>For a better day:</h5>

                <img
                src="https://img.magnific.com/free-vector/red-calligraphy-heart-2_78370-5897.jpg?semt=ais_hybrid&w=740&q=80">
                </img>

                <h5>Here is the list:</h5>
                <ul>
                    <li>coffee</li>
                    <li>tea</li>
                    <li>milk</li>
                </ul>
            </div>
        );
    }
}

export default Exercise;