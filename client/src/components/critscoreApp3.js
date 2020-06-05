import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function CritscoreApp3(props) {
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
            <h2>Critscore App 3 Page</h2>
        </div>
    )
}

export default CritscoreApp3;