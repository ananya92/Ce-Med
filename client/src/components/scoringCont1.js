import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import RespiratorySystem from './respiratorySystem';
import CardiovascularSystem from './cardiovascularSystem';
import NeurologicalSystem from './neurologicalSystem';
import RenalSystem from './renalSystem';
import OtherParams from './otherParams';
function ScoringCont1(props) {
    const [key, setKey] = useState('Respiratory System');
    return (
        <div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="Respiratory System" title="Respiratory System">
                    <RespiratorySystem/>
                </Tab>
                <Tab eventKey="Cardiovascular System" title="Cardiovascular System">
                    <CardiovascularSystem/>
                </Tab>
                <Tab eventKey="Neurological System" title="Neurological System">
                    <NeurologicalSystem/>
                </Tab>
                <Tab eventKey="Renal System" title="Renal System">
                    <RenalSystem/>
                </Tab>
                <Tab eventKey="Other" title="Other">
                    <OtherParams/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default ScoringCont1;