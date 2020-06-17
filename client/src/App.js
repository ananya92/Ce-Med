import React, { useState, useEffect } from "react";
import { Route, Router } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
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
  const [modalShow, setModalShow] = useState(false);
  const [patientVitals, setPatientVitals] = useState();

  function updatePatient(patient, selectedCase) {
    if(patient.name) {
      setCurrentPatient(
        {
          patientID: patient.id,
          name: patient.name,
          phoneNumber: patient.phoneNumber
        }
      );
    }
    if(selectedCase.id) {
      setCurrentCase( {
        id: selectedCase.id,
        caseName: selectedCase.caseName
      })
    }
  }

  function saveVitalsBeforeExiting(patientVitals) {
    setModalShow(true);
    setPatientVitals(patientVitals);
  }

  function saveVitals() {
    setModalShow(false);
    console.log("saveVitalsBeforeExiting called");
    console.log(patientVitals);
  }
  return (
    <Router history={history}>
        <div className="App">
          <MedNavbar />
          <Modal
                size="sm"
                show={modalShow}
                onHide={() => setModalShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body id="example-modal-sizes-title-lg">
                        Please save the changes in {patientVitals}.
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => saveVitals()} variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
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
              <IcuCriteriaApp2 currentPatient={currentPatient} currentCase={currentCase}/>}
          />
          <Route
            path="/scoringCont1"
            render={() =>
              <ScoringCont1 currentPatient={currentPatient} currentCase={currentCase} saveVitalsBeforeExiting={saveVitalsBeforeExiting}/>}
          />
          <Route
            exact path="/scoringCont2"
            render={() =>
              <ScoringCont2 currentPatient={currentPatient} currentCase={currentCase} saveVitalsBeforeExiting={saveVitalsBeforeExiting}/>}
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
  );
}

export default App;
