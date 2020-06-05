import React from 'react';

function CritscoreOlivia(props) {
    return (
        <div>
            <p>Patient ID: {props.currentPatient.patientID} &emsp; Name: {props.currentPatient.name}</p>
            <h2>Critscore OLIVIA Page</h2>
        </div>
    )
}

export default CritscoreOlivia;