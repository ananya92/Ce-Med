import React, { useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Container, Row, Col } from 'react-bootstrap';

function MonitoringInvasiveLines() {
    const [data, setData] = useState(
        [
            { id: "ICP monitor 1st 24 hrs (Indicate highest value)", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "ICP monitor > 24 hrs (Indicate highest value)", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Ventricular drain", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "PA catheter / Atrial line", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "ECMO", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Sheath post angiogram < 12 hrs", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "IABP", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Cardiac Assist Device", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "A-line", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Ventral Venous O2 saturation monitoring", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Non-invasive cardiac output monitor", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "CVP line", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Acute dialysis catheter", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" }
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

export default MonitoringInvasiveLines;