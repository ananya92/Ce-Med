import React, { useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

function EmergencyProcedures() {
    const [data, setData] = useState(
        [
            { id: "Transvenous pacing", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Transcutaneous pacing", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Intubation", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Emergency Tracheostomy", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Pericardial tap 1st 24 hours", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Emergency Cardioversion", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Defibrillation", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Intercostal drains", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Burholes", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Escharotomy", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" }
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
            if (entry.id === newState.cellEdit.rowId) {
                let changedField = newState.cellEdit.dataField;
                entry[changedField] = newState.cellEdit.newValue;
            }
            return entry;
        });
        setData(newData);
    }
    return (
        <div>
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
                onTableChange={onTableChange}
            />
        </div>
    )
}

export default EmergencyProcedures;