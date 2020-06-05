import React from 'react';

function PatientDetails(props) {
    return (
        <div>
            <p>Patient ID: {props.currentPatient.patientID} &emsp; Name: {props.currentPatient.name}</p>
            <h2>Patient Details Page</h2>
        </div>
    )
}

export default PatientDetails;