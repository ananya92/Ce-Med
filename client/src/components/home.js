import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    const [filterBy, setFilterBy] = useState('callback');
    const [options, setOptions] = useState([{ name: "Ananya Pramanik", number: "0431051442" }]);
    const [selected, setSelected] = useState([]);
    const filterByCallback = (option, props) => (
        option.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1 ||
        option.number.toLowerCase().indexOf(props.text.toLowerCase()) !== -1
    );

    const filterByFields = ['name', 'number'];
    useEffect(() => {
        console.log(selected);
    }, selected)
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <React.Fragment>
                            <p className="title">Search patient:</p>
                            <Typeahead
                                filterBy={filterBy === 'callback' ? filterByCallback : filterByFields}
                                id="custom-filtering-example"
                                labelKey="name"
                                options={options}
                                placeholder="Filter by name or phone number"
                                renderMenuItemChildren={(option) => (
                                    <div>
                                        {option.name}
                                        <div>
                                            <small>{option.number}</small>
                                        </div>
                                    </div>
                                )}
                                onChange={(selected) => {
                                    setSelected(selected);
                                }}
                                selected={selected}
                            />
                        </React.Fragment>
                        {
                            selected[0] !== undefined ?
                                <div>
                                </div> 
                            :
                                <div>
                                </div>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;