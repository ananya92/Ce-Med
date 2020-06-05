import React, { useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

function CardiovascularSystem() {
    const [data, setData] = useState(
        [
            { id: "Cardiac arrest within 24 hours", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Sternotomy < 24 hours", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "NSTEMI", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Positive Trop T/I", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Depressed ST segments", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Chest pain", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "STEMI", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Raised ST segments", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "PTCA / Stent < 12 hours", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Ablation / Rotablator < 24 hours", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Acute Dysrhythmia", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Elective Cardioversions < 12 hourse", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Temporary Pacemaker dependant", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Perm. Pacemaker - post insertion 12-24 hrs", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Vasodepresser/Positive Inotrope dependant", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Vascular Stent < 12 hours", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Hypovolaemia", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Tachycardia (highest rate above 100bpm)", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Bradycardia (Lowest rate below 60bpm)", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Hypotension (MAP lower than 60)", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Hypertension (Highest measure above 140/90)", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Increased capillary leak with edema", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Poor peripheral perfusion > 3 seconds", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" }
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

export default CardiovascularSystem;