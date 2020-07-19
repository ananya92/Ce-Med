import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';


// component pages
import Diagnosis from './BasicInfo/Diagnosis';
import Vitals from './BasicInfo/Vitals';
import PatientStatus from './BasicInfo/PatientStatus';
import Comorbidities from './BasicInfo/Comorbidities';

//This information must get from login
const user = {
    type: "admin"
}

function BasicInformation(props) {
    const [key, setKey] = useState('diagnosis');
    return (

        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>CLINICAL CRITERIA FOR SPECIALISED UNITS</h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="details"><span className="title">Patient ID:</span> {props.currentPatient.patientID} &emsp; <span className="title">Name:</span> {props.currentPatient.name} &emsp; <span className="title">Case ID:</span> {props.currentCase.id}</p>
                        <p className="details"><span className="title">Case summary:</span> {props.currentCase.caseName}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabs
                            id="diagnosis"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                        >                            
                            <Tab eventKey="diagnosis" title="Diagnosis" unmountOnExit>
                                <Diagnosis patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="vitals" title="Vitals" unmountOnExit>
                                <Vitals patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="patient-status" title="Patient Status" unmountOnExit>
                                <PatientStatus patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="comorbidities" title="Comorbidities" unmountOnExit>
                                <Comorbidities patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>                            
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default BasicInformation
    ;