import React from 'react';

function CritscoreApp2(props) {
    return (
        <div>
            <p>Patient ID: {props.currentPatient.patientID} &emsp; Name: {props.currentPatient.name}</p>
            <h2>Critscore App 2 Page</h2>
        </div>
    )
}

export default CritscoreApp2;