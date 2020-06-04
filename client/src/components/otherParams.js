import React, { useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Container, Row, Col } from 'react-bootstrap';

function OtherParams() {
    const [data, setData] = useState(
        [
            { id: "Major blood transfusion", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Autotransfusion", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Epidural", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Post-operative monitoring 24-48 hrs", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Cont. Invasive/non-invasive monitoring ≥ 4hrs every 15-30 mins", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Pyrexia > 38.3 °C (indicate value)", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Temp < 35.3 °C excl < 6hrs post-operative (indicate value)", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Tracheostomy", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" }
        ]
    );
    const columns = [{
        dataField: 'id',
        text: '',
        editable: false
    }, {
        dataField: 'day1',
        text: 'Mon'
    }, {
        dataField: 'day2',
        text: 'Tue'
    }, {
        dataField: 'day3',
        text: 'Wed'
    }, {
        dataField: 'day4',
        text: 'Thur'
    }, {
        dataField: 'day5',
        text: 'Fri'
    }, {
        dataField: 'day6',
        text: 'Sat'
    }, {
        dataField: 'day7',
        text: 'Sun'
    }
    ];
    const onTableChange = (type, newState) => {
        // handle any data change here
        var newData = data.map(entry => {
            console.log(entry);
            if(entry.id === newState.cellEdit.rowId) {
                let changedField = newState.cellEdit.dataField;
                entry[changedField] = newState.cellEdit.newValue;
            }
            return entry;
        });
        setData(newData);
      }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <BootstrapTable
                            keyField="id"
                            data={data}
                            columns={columns}
                            cellEdit={cellEditFactory({
                                mode: 'click',
                                blurToSave: true
                            })}
                            remote={{
                                filter: false,
                                pagination: false,
                                sort: false,
                                cellEdit: true
                            }}
                            onTableChange={ onTableChange }
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OtherParams;