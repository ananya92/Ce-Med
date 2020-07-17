import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";

// component pages
import PatientPersonalInformation from './PatientInfrormation/PatientPersonalInformation';
import EmergencyContact from './PatientInfrormation/EmergencyContact';
import AlternativeContact from './PatientInfrormation/AlternativeContact';
import MedicalAidInformation from './PatientInfrormation/MedicalAidInformation';
import HospitalVisitInformation from './PatientInfrormation/HospitalVisitInformation';
import GurantorInformation from './PatientInfrormation/GurantorInformation';
import ClinicalInformation from './PatientInfrormation/ClinicalInformation';
import PatientDeclaration from './PatientInfrormation/PatientDeclaration';

//This information must get from login
const user = {
    type: "admin"
}

function BasicInformation(props) {
    const [key, setKey] = useState('patient-personal-information');
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
                            id="basic-information"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                        >                            
                            <Tab eventKey="patient-details" title="Patient Details" unmountOnExit>
                                <PatientPersonalInformation patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="emergency-contact" title="Emergency Contact" unmountOnExit>
                                <EmergencyContact patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="alternative-contact" title="Alternative Contact" unmountOnExit>
                                <AlternativeContact patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="medical-aid-information" title="Medical Aid Information" unmountOnExit>
                                <MedicalAidInformation patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="hospital-visit-information" title="Hospital Visit Information" unmountOnExit>
                                <HospitalVisitInformation patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="gurantor-information" title="Gurantor Information" unmountOnExit>
                                <GurantorInformation patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="clinical-information" title="Clinical Information" unmountOnExit>
                                <ClinicalInformation patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="aatient-declaration" title="Patient Declaration" unmountOnExit>
                                <PatientDeclaration patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
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