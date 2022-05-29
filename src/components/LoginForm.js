import React from "react";
import ReactDOM from "react-dom/client";
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        fadeInDown: {
          animation: "x 1.5s",
          animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
        },
      },
    };
  }

  render() {
    return (
      <div className="container">
        <div className="col-12">
          <StyleRoot>
            <div className="row mt-4" style={this.state.styles.fadeInDown}>
              <p className="sotFont titleLogin">The Reaper's Secret</p>
            </div>
          </StyleRoot>
        </div>
      </div>
    );
  }
}

export default LoginForm;
