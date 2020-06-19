import React, { useState, useEffect } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { useCeMedContext } from "../utils/GlobalState";

function NeurologicalSystem(props) {
    const [state, dispatch] = useCeMedContext();
    const [data, setData] = useState(
        [
            { id: "Glascow coma scale ≤ 8", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Glascow coma scale 9 - 12", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Glascow coma scale 13 - 14", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Status Epilepticus", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Occurrence of seizures in last 24 hrs", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Polyuria", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" },
            { id: "Brain / spinal surgery < 24hrs", day1: "", day2: "", day3: "", day4: "", day5: "", day6: "", day7: "" }
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

    useEffect(() => {
        return function cleanup() {
            props.saveVitalsBeforeExiting("Neurological System");
        };
    }, []);

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

export default NeurologicalSystem;