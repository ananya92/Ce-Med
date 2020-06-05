import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import MedicationIntravenous from "./medicationIntravenous";
import LaboratoryImbalances from "./laboratoryImbalances";
import MonitoringInvasiveLines from "./monitoringInvasiveLines";
import EmergencyProcedures from "./emergencyProcedures";
import { Container, Row, Col } from 'react-bootstrap';
function ScoringCont2(props) {
    const [key, setKey] = useState('Medication Intravenous');
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <p className="details"><span className="title">Patient ID:</span> {props.currentPatient.patientID} &emsp; <span className="title">Name:</span> {props.currentPatient.name} &emsp; <span className="title">Case ID:</span> {props.currentCase.id}</p>
                        <p className="details"><span className="title">Case summary:</span> {props.currentCase.caseName}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                        >
                            <Tab eventKey="Medication Intravenous" title="Medication Intravenous">
                                <MedicationIntravenous />
                            </Tab>
                            <Tab eventKey="Laboratory Imbalances" title="Laboratory Imbalances">
                                <LaboratoryImbalances />
                            </Tab>
                            <Tab eventKey="Monitoring / Invasive Lines" title="Monitoring / Invasive Lines">
                                <MonitoringInvasiveLines />
                            </Tab>
                            <Tab eventKey="Emergency Procedures Within 24 hrs" title="Emergency Procedures Within 24 hrs">
                                <EmergencyProcedures />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ScoringCont2;