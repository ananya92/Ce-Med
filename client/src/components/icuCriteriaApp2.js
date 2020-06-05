import React from 'react';

function IcuCriteriaApp2(props) {
    return (
        <div>
            <p>Patient ID: {props.currentPatient.patientID} &emsp; Name: {props.currentPatient.name}</p>
            <h2>ICU Criteria App2 Page</h2>
        </div>
    )
}

export default IcuCriteriaApp2;