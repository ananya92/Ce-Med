import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import RespiratorySystem from './respiratorySystem';
import CardiovascularSystem from './cardiovascularSystem';
import NeurologicalSystem from './neurologicalSystem';
import RenalSystem from './renalSystem';
import OtherParams from './otherParams';
import { Container, Row, Col } from 'react-bootstrap';
import { useCeMedContext } from "../utils/GlobalState";
function ScoringCont1(props) {
    const [state, dispatch] = useCeMedContext();
    const [key, setKey] = useState('Respiratory System');
    /* const [modalShow, setModalShow] = useState(false);
    
        function saveVitalsBeforeExiting() {
            if(state.isRecordChanged) {
                setModalShow(true);
            }
        }
    
        function saveVitals() {
          setModalShow(false);
          console.log("saveVitalsBeforeExiting called");
          console.log(state.currentRecord);
          dispatch({type: "initNewRecord", data: {isRecordChanged: false}}); 
        }
        */
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
                            <Tab eventKey="Respiratory System" title="Respiratory System" unmountOnExit>
                                <RespiratorySystem patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="Cardiovascular System" title="Cardiovascular System" unmountOnExit>
                                <CardiovascularSystem patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="Neurological System" title="Neurological System" unmountOnExit>
                                <NeurologicalSystem patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="Renal System" title="Renal System" unmountOnExit>
                                <RenalSystem patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                            <Tab eventKey="Other" title="Other" unmountOnExit>
                                <OtherParams patientId={props.currentPatient.patientID} caseId={props.currentCase.id} />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
            {/* 
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
              Please save the changes in {state.pageName}.
                </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => saveVitals()} variant="primary">Save</Button>
            </Modal.Footer>
          </Modal>
    */}
        </div>
    )
}

export default ScoringCont1;