import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import MedicationIntravenous from "./medicationIntravenous";
import LaboratoryImbalances from "./laboratoryImbalances";
import MonitoringInvasiveLines from "./monitoringInvasiveLines";
import EmergencyProcedures from "./emergencyProcedures";
import { Container, Row, Col } from 'react-bootstrap';
import { useCeMedContext } from "../utils/GlobalState";
function ScoringCont2(props) {
    const [state, dispatch] = useCeMedContext();
    const [modalShow, setModalShow] = useState(false);
    const [key, setKey] = useState('Medication Intravenous');

    /*
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
                            <Tab eventKey="Medication Intravenous" title="Medication Intravenous" unmountOnExit>
                                <MedicationIntravenous />
                            </Tab>
                            <Tab eventKey="Laboratory Imbalances" title="Laboratory Imbalances" unmountOnExit>
                                <LaboratoryImbalances />
                            </Tab>
                            <Tab eventKey="Monitoring / Invasive Lines" title="Monitoring / Invasive Lines" unmountOnExit>
                                <MonitoringInvasiveLines />
                            </Tab>
                            <Tab eventKey="Emergency Procedures Within 24 hrs" title="Emergency Procedures Within 24 hrs" unmountOnExit>
                                <EmergencyProcedures />
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

export default ScoringCont2;