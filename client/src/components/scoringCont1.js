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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ScoringCont1;