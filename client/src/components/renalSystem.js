import React, { useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

function RenalSystem() {
    const [data, setData] = useState(
        [
            { id: "Acute renal failure", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Creatinine above 300 ", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Urine output < 0.3ml/kg/hr", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Anuria x 12hrs", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Chronic renal failure", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Acute renal dialysis incl CCVHD, CCVHDF, SLEDD", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Chronic haemodialysis", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Metabolic acidosis", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Metabolic alkalosis", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" }
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

export default RenalSystem;