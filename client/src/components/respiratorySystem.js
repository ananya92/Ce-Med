import React, { useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
function RespiratorySystem() {
    const [data, setData] = useState(
        [
            { id: "Respiratory arrest within 24 hours", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Mechanically ventilated with FiO2 ≥ 6%", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Mechanically ventilated", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Noninvasive Positive Pressure Ventilation", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Extubation < 24 hours", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Intubated but not ventilated", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Oxygen O2 > 40%", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "High-flow Nasal cannula", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Saturation < 90% on O2 ≥ 40%", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Respiratory acidosis", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Respiratory alkalosis", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Respiratory rate > 30 per minute", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Hypoventilation < 10 per minute", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Bronchospasm / Stridor", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "< 2 hourly nebulisation", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "< 2 hourly suctioning", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" }
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

export default RespiratorySystem;