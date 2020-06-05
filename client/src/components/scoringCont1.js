import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import RespiratorySystem from './respiratorySystem';
import CardiovascularSystem from './cardiovascularSystem';
import NeurologicalSystem from './neurologicalSystem';
import RenalSystem from './renalSystem';
import OtherParams from './otherParams';
import { Container, Row, Col } from 'react-bootstrap';
function ScoringCont1(props) {
    const [key, setKey] = useState('Respiratory System');
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
                <Tab eventKey="Respiratory System" title="Respiratory System">
                    <RespiratorySystem />
                </Tab>
                <Tab eventKey="Cardiovascular System" title="Cardiovascular System">
                    <CardiovascularSystem />
                </Tab>
                <Tab eventKey="Neurological System" title="Neurological System">
                    <NeurologicalSystem />
                </Tab>
                <Tab eventKey="Renal System" title="Renal System">
                    <RenalSystem />
                </Tab>
                <Tab eventKey="Other" title="Other">
                    <OtherParams />
                </Tab>
            </Tabs>
        </div>
    )
}

export default ScoringCont1;