import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom/client";
import Cookies from "universal-cookie";
import "./App.css";
import "./css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import LoginForm from "./components/LoginForm";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
