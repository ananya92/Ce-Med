import React, { Component } from "react";
import { Route, Router } from 'react-router-dom';
import history from "./utils/history";
import MedNavbar from './components/navbar';
import Home from "./components/home";
import Login from "./components/login";
import PatientDetails from './components/patientDetails';
import IcuCriteriaApp1 from './components/icuCriteriaApp1';
import IcuCriteria from './components/icuCriteria';
import IcuCriteriaApp2 from './components/icuCriteriaApp2';
import ScoringCont1 from './components/scoringCont1';
import ScoringCont2 from './components/scoringCont2';
import CritscoreOlivia from './components/critscoreOlivia';
import CritscoreApp1 from './components/critscoreApp1';
import CritscoreApp2 from './components/critscoreApp2';
import CritscoreApp3 from './components/critscoreApp3';
import "./App.css";
import Register from "./components/register";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <MedNavbar />
          <Route
            exact path="/"
            render={() =>
              <Home />}
          />
          <Route
            path="/login"
            render={() =>
              <Login />}
          />
          <Route
            path="/register"
            render={() =>
              <Register />}
          />
          <Route
            exact path="/patientDetails"
            render={() =>
              <PatientDetails />}
          />
          <Route
            exact path="/icuCriteriaApp1"
            render={() =>
              <IcuCriteriaApp1 />}
          />
          <Route
            path="/icuCriteria"
            render={() =>
              <IcuCriteria />}
          />
          <Route
            exact path="/icuCriteriaApp2"
            render={() =>
              <IcuCriteriaApp2 />}
          />
          <Route
            path="/scoringCont1"
            render={() =>
              <ScoringCont1 />}
          />
          <Route
            exact path="/scoringCont2"
            render={() =>
              <ScoringCont2 />}
          />
          <Route
            path="/critscoreOlivia"
            render={() =>
              <CritscoreOlivia />}
          />
          <Route
            exact path="/critscoreApp1"
            render={() =>
              <CritscoreApp1 />}
          />
          <Route
            path="/critscoreApp2"
            render={() =>
              <CritscoreApp2 />}
          />
          <Route
            exact path="/critscoreApp3"
            render={() =>
              <CritscoreApp3 />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
