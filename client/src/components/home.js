import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Container, Row, Col, Button } from 'react-bootstrap';
import API from '../utils/API';
import history from "../utils/history";

function Home(props) {
    const [filterBy, setFilterBy] = useState('callback');
    const [options, setOptions] = useState([]);
    const [caseOptions, setCaseOptions] = useState([]);
    const [selected, setSelected] = useState([]);
    const [selectedCase, setSelectedCase] = useState([]);
    const [allPatients, setAllPatients] = useState([]);
    useEffect(() => {
        if (props.currentPatient.name !== "") {
            setSelected([{
                name: props.currentPatient.name,
                phoneNumber: props.currentPatient.phoneNumber
            }]);
            fillCaseOptionsByPatientID(props.currentPatient.patientID);
        }
        if (props.currentCase.id !== "") {
            setSelectedCase([{
                id: props.currentCase.id,
                caseName: props.currentCase.caseName
            }]);
        }
        API.getPatients().then(response => {
            const options = response.data.map((patient) => ({
                name: patient.name,
                phoneNumber: patient.phoneNumber.toString()
            }));
            setOptions(options);
            setAllPatients(response.data);
        }).catch(error => {
            console.log('get patients error: ', error);
        });
    }, []);

    const filterByFields = ['name', 'phoneNumber'];
    const filterCaseByFields = ['id', 'caseName'];

    // Function to fill the case dropdown options based on the selected patient ID
    function fillCaseOptionsByPatientID(patientID) {
        API.getCasesByPatientId(patientID).then(response => {
            const caseOptions = response.data.map(caseOption => ({
                id: pad(caseOption.id, 4),
                caseName: caseOption.summary
            }));
            setCaseOptions(caseOptions);
        }).catch(error => {
            console.log('get cases by patientID error: ', error);
        });
    }
    // Pad the case ID with leading zeros to make a 4 digit case ID
    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      }
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <p className="title">Search patient:</p>
                        <React.Fragment>
                            <Typeahead
                                filterBy={filterByFields}
                                id="custom-filtering-example"
                                labelKey="name"
                                options={options}
                                placeholder="Filter by name or phone number"
                                renderMenuItemChildren={(option) => (
                                    <div>
                                        {option.name}
                                        <div>
                                            <small>Ph: {option.phoneNumber}</small>
                                        </div>
                                    </div>
                                )}
                                onChange={(selected) => {
                                    setSelected(selected);
                                    setSelectedCase([]);
                                    if (selected[0] !== undefined) {
                                        for (var i = 0; i < allPatients.length; i++) {
                                            if (allPatients[i].name === selected[0].name && allPatients[i].phoneNumber == selected[0].phoneNumber) {
                                                fillCaseOptionsByPatientID(allPatients[i].id);
                                                break;
                                            }
                                        }
                                    }
                                }}
                                selected={selected}
                            />
                        </React.Fragment>
                        {selected[0] !== undefined ?
                            <div>
                                <p className="title">Select Case:</p>
                                <React.Fragment>
                                    <Typeahead
                                        filterBy={filterCaseByFields}
                                        id="custom-filtering-example"
                                        labelKey="caseName"
                                        options={caseOptions}
                                        placeholder="Seach by case ID or Case name"
                                        renderMenuItemChildren={(caseOption) => (
                                            <div>
                                                {caseOption.caseName}
                                                <div>
                                                    <small>Case ID: {caseOption.id}</small>
                                                </div>
                                            </div>
                                        )}
                                        onChange={(selectedCase) => {
                                            setSelectedCase(selectedCase);
                                            if (selected[0] !== undefined && selectedCase[0] !== undefined) {
                                                for (var i = 0; i < allPatients.length; i++) {
                                                    if (allPatients[i].name === selected[0].name && allPatients[i].phoneNumber == selected[0].phoneNumber) {
                                                        props.updatePatient(allPatients[i], selectedCase[0]);
                                                        break;
                                                    }
                                                }
                                            }
                                        }}
                                        selected={selectedCase}
                                    />
                                </React.Fragment>
                            </div> : <span />}
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <br />
                        {
                            selected[0] !== undefined && selectedCase[0] !== undefined ?
                                <div>
                                    <Button onClick={() => { history.push("/patientDetails"); }} variant="primary" block>Patient Details</Button>
                                    <Button onClick={() => { history.push("/icuCriteriaApp1"); }} variant="primary" block>ICU Criteria App 1</Button>
                                    <Button onClick={() => { history.push("/icuCriteria"); }} variant="primary" block>ICU Criteria</Button>
                                    <Button onClick={() => { history.push("/icuCriteriaApp2"); }} variant="primary" block>ICU Criteria App 2</Button>
                                    <Button onClick={() => { history.push("/scoringCont1"); }} variant="primary" block>Scoring Cont. 1</Button>
                                    <Button onClick={() => { history.push("/scoringCont2"); }} variant="primary" block>Scoring Cont. 2</Button>
                                    <Button onClick={() => { history.push("/critscoreOlivia"); }} variant="primary" block>Add Info to Critscore OLIVIA</Button>
                                    <Button onClick={() => { history.push("/critscoreApp1"); }} variant="primary" block>Add Info to Critscore App 1</Button>
                                    <Button onClick={() => { history.push("/critscoreApp2"); }} variant="primary" block>Add Info to Critscore App 2</Button>
                                    <Button onClick={() => { history.push("/critscoreApp3"); }} variant="primary" block>Add Info to Critscore App 3</Button>
                                </div>
                                :
                                <div>
                                    <Button onClick={() => { history.push("/patientDetails"); }} variant="primary" block>Patient Details</Button>
                                    <Button variant="outline-secondary" block disabled>ICU Criteria App 1</Button>
                                    <Button variant="outline-secondary" block disabled>ICU Criteria</Button>
                                    <Button variant="outline-secondary" block disabled>ICU Criteria App 2</Button>
                                    <Button variant="outline-secondary" block disabled>Scoring Cont. 1</Button>
                                    <Button variant="outline-secondary" block disabled>Scoring Cont. 2</Button>
                                    <Button variant="outline-secondary" block disabled>Add Info to Critscore OLIVIA</Button>
                                    <Button variant="outline-secondary" block disabled>Add Info to Critscore App 1</Button>
                                    <Button variant="outline-secondary" block disabled>Add Info to Critscore App 2</Button>
                                    <Button variant="outline-secondary" block disabled>Add Info to Critscore App 3</Button>
                                </div>
                        }
                        <br />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;