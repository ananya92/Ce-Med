import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function CritscoreApp2(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <p className="details"><span className="title">Patient ID:</span> {props.currentPatient.patientID} &emsp; <span className="title">Name:</span> {props.currentPatient.name} &emsp; <span className="title">Case ID:</span> {props.currentCase.id}</p>
                        <p className="details"><span className="title">Case summary:</span> {props.currentCase.caseName}</p>
                    </Col>
                </Row>
            </Container>
            <h2>Critscore App 2 Page</h2>
        </div>
    )
}

export default CritscoreApp2;