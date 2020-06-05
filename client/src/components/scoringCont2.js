import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import MedicationIntravenous from "./medicationIntravenous";
import LaboratoryImbalances from "./laboratoryImbalances";
import MonitoringInvasiveLines from "./monitoringInvasiveLines";
import EmergencyProcedures from "./emergencyProcedures";

function ScoringCont2(props) {
    const [key, setKey] = useState('Medication Intravenous');
    return (
        <div>
            <p>Patient ID: {props.currentPatient.patientID} &emsp; Name: {props.currentPatient.name}</p>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="Medication Intravenous" title="Medication Intravenous">
                    <MedicationIntravenous/>
                </Tab>
                <Tab eventKey="Laboratory Imbalances" title="Laboratory Imbalances">
                    <LaboratoryImbalances/>
                </Tab>
                <Tab eventKey="Monitoring / Invasive Lines" title="Monitoring / Invasive Lines">
                    <MonitoringInvasiveLines/>
                </Tab>
                <Tab eventKey="Emergency Procedures Within 24 hrs" title="Emergency Procedures Within 24 hrs">
                    <EmergencyProcedures/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default ScoringCont2;