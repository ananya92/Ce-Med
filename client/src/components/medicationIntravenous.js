import React, { useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Container, Row, Col } from 'react-bootstrap';

function MedicationIntravenous() {
    const [data, setData] = useState(
        [
            { id: "Positive Inotropic Support", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Anti-dysrhytmics", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Platelets aggregation inhibitors", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Thrombolytics", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Insulin", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Sedation", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Vasodilators/ Vasopressor/ Betablockers", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Muscle relaxtants", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "CA Channel blockers", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Diuretics", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "TPN", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Opiods", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Dexmetomidine/ Precedex", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Remifentanil / Ultiva", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Ephidrine", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Hypertonic fluids/ drugs", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" }
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

export default MedicationIntravenous;