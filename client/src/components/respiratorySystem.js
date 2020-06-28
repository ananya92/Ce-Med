import React, { useState, useEffect } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { useCeMedContext } from "../utils/GlobalState";
import API from "../utils/API";

function RespiratorySystem(props) {
    const [state, dispatch] = useCeMedContext();
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
    const [newRecordInfo, setNewRecordInfo] = useState({
        PatientId: props.patientId,
        CaseId: props.caseId
    });
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
        // API.getRespiratorySystemData().then(response => {
        //     console.log(response);
        // });
    }, []);

    useEffect(() => {
        // dispatch({type: "initNewRecord", data: {newRecordInfo: newRecordInfo, pageName: "Respiratory System", isRecordChanged: true}});
        API.storeRespiratorySystemData(newRecordInfo).then(response => {
            console.log(response);
        }).catch(error => {
            console.log("Error while adding respiratory system data:", error);
        });
    }, [newRecordInfo]);

    const onTableChange = (type, newState) => {
        // handle any data change here
        var newData = data.map(entry => {
            // newState.cellEdit.rowId is the field name
            // newState.cellEdit.dataField is the date
            // newState.cellEdit.newValue is the entered value
            if (entry.id === newState.cellEdit.rowId) {
                let changedField = newState.cellEdit.dataField;
                entry[changedField] = newState.cellEdit.newValue;
                switch(newState.cellEdit.rowId) {
                     case "Respiratory arrest within 24 hours":
                        setNewRecordInfo({...newRecordInfo, Respiratory_Arrest_within_24hours: newState.cellEdit.newValue});
                        break;
                     case "Mechanically ventilated with FiO2 ≥ 6%":
                        setNewRecordInfo({...newRecordInfo, Mechanically_Ventilated_with_FiO2_gt_6per: newState.cellEdit.newValue});
                         break;
                     case "Mechanically ventilated":
                        setNewRecordInfo({...newRecordInfo, Mechanically_Ventilated: newState.cellEdit.newValue});
                         break;
                     case "Noninvasive Positive Pressure Ventilation":
                        setNewRecordInfo({...newRecordInfo, Noninvasive_Positive_Pressure_Ventilation: newState.cellEdit.newValue});
                         break;
                     case "Extubation < 24 hours":
                        setNewRecordInfo({...newRecordInfo, Extubation_lt_24hrs: newState.cellEdit.newValue});
                         break;
                     case "Intubated but not ventilated":
                        setNewRecordInfo({...newRecordInfo, Intubated_NonVentilated: newState.cellEdit.newValue});
                         break;
                     case "Oxygen O2 > 40%":
                        setNewRecordInfo({...newRecordInfo, Oxygen_O2_gt_40Perc: newState.cellEdit.newValue});
                         break;
                     case "High-flow Nasal cannula":
                        setNewRecordInfo({...newRecordInfo, High_Flow_Nasal_Cannula: newState.cellEdit.newValue});
                         break;
                     case "Saturation < 90% on O2 ≥ 40%":
                        setNewRecordInfo({...newRecordInfo, Saturation_lt_90per_O2_gt_40Perc: newState.cellEdit.newValue});
                         break;
                     case "Respiratory acidosis":
                        setNewRecordInfo({...newRecordInfo, Respiratory_Acidosis: newState.cellEdit.newValue});
                         break;
                     case "Respiratory alkalosis":
                        setNewRecordInfo({...newRecordInfo, Respiratory_Alkalosis: newState.cellEdit.newValue});
                         break;
                     case "Respiratory rate > 30 per minute":
                        setNewRecordInfo({...newRecordInfo, Respiratory_Rate_gt_30pmin: newState.cellEdit.newValue});
                         break;
                     case "Hypoventilation < 10 per minute":
                        setNewRecordInfo({...newRecordInfo, Hypoventilation_lt_10pmin: newState.cellEdit.newValue});
                         break;
                     case "Bronchospasm / Stridor":
                        setNewRecordInfo({...newRecordInfo, Bronchospasm_Stridor: newState.cellEdit.newValue});
                         break;
                     case "< 2 hourly nebulisation":
                        setNewRecordInfo({...newRecordInfo, lt_2_Hourly_Nebulisation: newState.cellEdit.newValue});
                         break;
                     case "< 2 hourly suctioning":
                        setNewRecordInfo({...newRecordInfo, lt_2_Hourly_Suctioning: newState.cellEdit.newValue});
                         break;
                }
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