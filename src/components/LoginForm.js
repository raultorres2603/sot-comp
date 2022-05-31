import React from "react";
import ReactDOM from "react-dom/client";
import {
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "react-animations";
import Radium, { StyleRoot } from "radium";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        fadeInDown: {
          animation: "x 1s",
          animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
        },
        fadeInLeft: {
          animation: "x 1s",
          animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
        },
        fadeInRight: {
          animation: "x 1s",
          animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
        },
        fadeInUp: {
          animation: "x 1s",
          animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
        },
      },
    };
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          <StyleRoot>
            <div className="row mt-4" style={this.state.styles.fadeInDown}>
              <p className="titleLogin">Athena's Fortune</p>
            </div>
            <div className="row mt-2" style={this.state.styles.fadeInDown}>
              <p className="formTitle">Join Us</p>
            </div>
            <div className="row mt-3">
              <div className="col-md-4" style={this.state.styles.fadeInDown}>
                <input
                  class="form-control form-control-lg controlSOT"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
              </div>
              <div className="col-md-4" style={this.state.styles.fadeInDown}>
                <input
                  class="form-control form-control-lg controlSOT"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="col-md-4" style={this.state.styles.fadeInDown}>
                <input
                  class="form-control form-control-lg controlSOT"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="row mt-5" style={this.state.styles.fadeInUp}>
              <button type="button" class="btn btn-info btn-lg">
                Enter
              </button>
            </div>
          </StyleRoot>
        </div>
      </div>
    );
  }
}

export default LoginForm;
