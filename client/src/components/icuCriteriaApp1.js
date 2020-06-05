import React from 'react';

function IcuCriteriaApp1(props) {
    return (
        <div>
            <p>Patient ID: {props.currentPatient.patientID} &emsp; Name: {props.currentPatient.name}</p>
            <h2>ICU Criteria App1 Page</h2>
        </div>
    )
}

export default IcuCriteriaApp1;