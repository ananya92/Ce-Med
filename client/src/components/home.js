import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Container, Row, Col, Button } from 'react-bootstrap';
import API from '../utils/API';

function Home() {
    const [filterBy, setFilterBy] = useState('callback');
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState([]);
    useEffect(() => {
        API.getPatients().then(response => {
            const options = response.data.map((patient) => ({
                name: patient.name,
                phoneNumber: patient.phoneNumber.toString()
              }));
            setOptions(options);
        }).catch(error => {
            console.log('get patients error: ', error);
        });
    }, []);
    const filterByFields = ['name', 'phoneNumber'];
    useEffect(() => {
        console.log(selected);
    }, selected)
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <React.Fragment>
                            <p className="title">Search patient:</p>
                            <Typeahead
                                filterBy={filterByFields}
                                id="custom-filtering-example"
                                labelKey="name"
                                options={options}
                                placeholder="Filter by name or phone number"
                                renderMenuItemChildren={(option) => (
                                    <div>
                                        {option.name}
                                        <div>
                                            <small>{option.phoneNumber}</small>
                                        </div>
                                    </div>
                                )}
                                onChange={(selected) => {
                                    setSelected(selected);
                                }}
                                selected={selected}
                            />
                        </React.Fragment>
                        <br/>
                        {
                            selected[0] !== undefined ?
                                <div>
                                    <Button href="/patientDetails" variant="primary" block>Patient Details</Button>
                                    <Button href="/icuCriteriaApp1" variant="primary" block>ICU Criteria App 1</Button>
                                    <Button href="/icuCriteria" variant="primary" block>ICU Criteria</Button>
                                    <Button href="/icuCriteriaApp2" variant="primary" block>ICU Criteria App 2</Button>
                                    <Button href="/scoringCont1" variant="primary" block>Scoring Cont. 1</Button>
                                    <Button href="/scoringCont2" variant="primary" block>Scoring Cont. 2</Button>
                                    <Button href="/critscoreOlivia" variant="primary" block>Add Info to Critscore OLIVIA</Button>
                                    <Button href="/critscoreApp1" variant="primary" block>Add Info to Critscore App 1</Button>
                                    <Button href="/critscoreApp2" variant="primary" block>Add Info to Critscore App 2</Button>
                                    <Button href="/critscoreApp3" variant="primary" block>Add Info to Critscore App 3</Button>
                                </div>
                                :
                                <div>
                                    <Button href="/patientDetails" variant="primary" block>Patient Details</Button>
                                    <Button variant="outline-secondary" block disabled>ICU Criteria App 1</Button>
                                    <Button variant="outline-secondary" block disabled>ICU Criteria</Button>
                                    <Button variant="outline-secondary" block disabled>ICU Criteria App 2</Button>
                                    <Button variant="outline-secondary" block disabled>Scoring Cont. 1</Button>
                                    <Button variant="outline-secondary" block disabled>Scoring Cont. 2</Button>
                                    <Button variant="outline-secondary" block disabled>Add Info to Critscore OLIVIA</Button>
                                    <Button variant="outline-secondary" block disabled>Add Info to Critscore App 1</Button>
                                    <Button variant="outline-secondary" block disabled>Add Info to Critscore App 2</Button>
                                    <Button variant="outline-secondary" block disabled>Add Info to Critscore App 3</Button>
                                </div>
                        }
                        <br/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;