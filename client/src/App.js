import React, { useState, useEffect } from "react";
import { Route, Router } from 'react-router-dom';
import history from "./utils/history";
import MedNavbar from './components/navbar';
import Home from "./components/home";
import Login from "./components/login";
import PatientDetails from './components/patientDetails';
import BasicInformation from './components/basicInformation';
import IcuCriteriaApp1 from './components/icuCriteriaApp1';
import IcuCriteria from './components/icuCriteria';
import IcuCriteriaApp2 from './components/icuCriteriaApp2';
import ScoringCont1 from './components/scoringCont1';
import ScoringCont2 from './components/scoringCont2';
import CritscoreOlivia from './components/critscoreOlivia';
import CritscoreApp1 from './components/critscoreApp1';
import CritscoreApp2 from './components/critscoreApp2';
import CritscoreApp3 from './components/critscoreApp3';
import { CeMedContextProvider } from "./utils/GlobalState";

import "./App.css";

function App() {
  const [currentPatient, setCurrentPatient] = useState(
    {
      patientID: "",
      name: "",
      phoneNumber: ""
    }
  );
  const [currentCase, setCurrentCase] = useState(
    {
      id: "",
      caseName: ""
    }
  );

  function updatePatient(patient, selectedCase) {
    if (patient.name) {
      setCurrentPatient(
        {
          patientID: patient.id,
          name: patient.name,
          phoneNumber: patient.phoneNumber
        }
      );
    }
    if (selectedCase.id) {
      setCurrentCase({
        id: selectedCase.id,
        caseName: selectedCase.caseName
      })
    }
  }

  return (
    <CeMedContextProvider>
      <Router history={history}>
        <div className="App">
          <MedNavbar />
          <Route
            exact path="/"
            render={() =>
              <Home currentPatient={currentPatient} currentCase={currentCase} updatePatient={updatePatient} />}
          />
          <Route
            path="/login"
            render={() =>
              <Login />}
          />
          <Route
            exact path="/patientDetails"
            render={() =>
              <PatientDetails currentPatient={currentPatient} currentCase={currentCase} />}
          />
          <Route
            exact path="/basicInformation"
            render={() =>
              <BasicInformation currentPatient={currentPatient} currentCase={currentCase} />}
          />
          <Route
            exact path="/icuCriteriaApp1"
            render={() =>
              <IcuCriteriaApp1 currentPatient={currentPatient} currentCase={currentCase} />}
          />
          <Route
            path="/icuCriteria"
            render={() =>
              <IcuCriteria currentPatient={currentPatient} currentCase={currentCase} />}
          />
          <Route
            exact path="/icuCriteriaApp2"
            render={() =>
              <IcuCriteriaApp2 currentPatient={currentPatient} currentCase={currentCase} />}
          />
          <Route
            path="/scoringCont1"
            render={() =>
              <ScoringCont1 currentPatient={currentPatient} currentCase={currentCase} />}
          />
          <Route
            exact path="/scoringCont2"
            render={() =>
              <ScoringCont2 currentPatient={currentPatient} currentCase={currentCase} />}
          />
          <Route
            path="/critscoreOlivia"
            render={() =>
              <CritscoreOlivia currentPatient={currentPatient} currentCase={currentCase} />}
          />
          <Route
            exact path="/critscoreApp1"
            render={() =>
              <CritscoreApp1 currentPatient={currentPatient} currentCase={currentCase} />}
          />
          <Route
            path="/critscoreApp2"
            render={() =>
              <CritscoreApp2 currentPatient={currentPatient} currentCase={currentCase} />}
          />
          <Route
            exact path="/critscoreApp3"
            render={() =>
              <CritscoreApp3 currentPatient={currentPatient} currentCase={currentCase} />}
          />
        </div>
      </Router>
    </CeMedContextProvider>
  );
}

export default App;
