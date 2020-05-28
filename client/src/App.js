import React, { Component } from "react";
import { Route, Router } from 'react-router-dom';
import history from "./utils/history";
import MedNavbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <MedNavbar />
          <Route
          exact path="/"
          render={() =>
            <Home/>}
        />
          <Route
            path="/login"
            render={() =>
              <Login/>}
          />
        </div>
      </Router>
    );
  }
}

export default App;
