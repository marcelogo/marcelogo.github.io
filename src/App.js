import React, { Component } from "react";
import { Router } from "react-router-dom";
import Routes from "./components/Routes";
import history from "./components/History";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        {/* <Router history={history}> */}
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
