import React, { useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

function LaboratoryImbalances() {
    const [data, setData] = useState(
        [
            { id: "Hypo Serum Na ≤ 130mmol/l", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Hypo serum Na ≥ 150mmol/l", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Hypo serum K+ ≤ 3.5mmol/l", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Hyper serum K+ ≥ 5.0mmol/l", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Hypo serum glucose ≤ 4.0mmol/l", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Hyper serum glucose ≥ 8.0mmol/l", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Increased serum osmolarity", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Raised Billirubin > 21µmol/l", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Acute Hb < 8g/dl", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Raised proBNP", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Abmormal high levels of therapeutic medication", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Toxic levels of medication", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Platelet counts ≤ 100", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Abnormal INR", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Positive DIC Screen", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "pH ≤ 7.20", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Raised serum amylase", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Albumin < 20", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" }
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

export default LaboratoryImbalances;