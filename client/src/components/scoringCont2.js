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
                        <p>Patient ID: {props.currentPatient.patientID} &emsp; Name: {props.currentPatient.name} &emsp; Case ID: {props.currentCase.id}</p>
                        <p>Case summary: {props.currentCase.caseName}</p>
                    </Col>
                </Row>
            </Container>
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
        </div>
    )
}

export default ScoringCont2;