import React from 'react';

function CritscoreApp1(props) {
    return (
        <div>
            <p>Patient ID: {props.currentPatient.patientID} &emsp; Name: {props.currentPatient.name}</p>
            <h2>Critscore App 1 Page</h2>
        </div>
    )
}

export default CritscoreApp1;