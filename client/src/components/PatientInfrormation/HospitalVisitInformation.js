import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import API from "../../utils/API";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import moment from "moment";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// for styling form components
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            marginTop: 5,
            display: "flex",
            width: "100%",
        },
    },

}));
//to keep case information
let caseInfo = "";

function HospitalVisitInformation(props) {
    const classes = useStyles();
    // react-hook-form
    const { register, handleSubmit, setValue, errors } = useForm();

    const [initialState, setInitialState] = useState(
        {
            admissionDate: moment(Date.now()).format("YYYY-MM-DD"),
            surgeryBookedDate: moment(Date.now()).format("YYYY-MM-DD"),
            surgeryBookedTime: moment(Date.now()).format("hh:mm"),
            admittingDoctor: " ",
            referringDoctor: " ",
            alternateDoctor: " ",
            generalGp: " ",
            icdCodeDiagnosis: " ",
            cptCodeProcedure: " ",
        }
    );

    //setting case info
    caseInfo = {
        PatientId: props.patientId,
        CaseId: props.caseId
    };

    // Retrieving the existing value if case exists
    useEffect(() => {
        if (caseInfo.CaseId) {
            API.getHospitalVisitInformation(caseInfo.CaseId).then(response => {
                // console.log(JSON.stringify(response.data[0]));
                let data = response.data[0];
                //this part is needed if need to update initial values 
                // if (data != undefined || data != null) {
                //     let retrievedData = {
                //         admissionDate: data.admissionDate,
                //         surgeryBookedDate: data.surgeryBookedDate,
                //         surgeryBookedTime: data.surgeryBookedTime,
                //         admittingDoctor: data.admittingDoctor,
                //         referringDoctor: data.referringDoctor,
                //         alternateDoctor: data.alternateDoctor,
                //         generalGp: data.generalGp,
                //         icdCodeDiagnosis: data.icdCodeDiagnosis,
                //         cptCodeProcedure: data.cptCodeProcedure,

                //     }
                //     console.log(retrievedData);
                //     setTimeout(() => setInitialState(retrievedData));
                // } else {
                //     console.log("There is no saved data");
                // }
                if (data != undefined || data != null) {
                    setValue([
                        { admissionDate: moment(data.admissionDate).format("YYYY-MM-DD") },
                        { surgeryBookedDate: moment(data.surgeryBookedDate).format("YYYY-MM-DD") },
                        { surgeryBookedTime: data.surgeryBookedTime },
                        { admittingDoctor: data.admittingDoctor },
                        { referringDoctor: data.referringDoctor },
                        { alternateDoctor: data.alternateDoctor },
                        { generalGp: data.generalGp },
                        { icdCodeDiagnosis: data.icdCodeDiagnosis },
                        { cptCodeProcedure: data.cptCodeProcedure },
                    ]);
                }
                else {
                    console.log("There is no saved Hospital Visit Information data");
                }
            }).catch(error => {
                console.log("Error while getting Hospital Visit Information data:", error);
            });
        }
    }, [])

    // saving or updating value on form submit
    const onSubmit = (res) => {
        var data = {
            ...res, CaseId: caseInfo.CaseId
        }

        console.log(data);

        API.storeHospitalVisitInformation(data).then(response => {
            // console.log(response);
        }).catch(error => {
            console.log("Error while adding Hospital Visit Information data:", error);
        });
    };


    return (

        <Container>

            <h2>Hospital Visit Information</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.root}
            // style={{ margin: "auto", textAlign: "justify", paddingTop: 10 }}
            >

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="dense"
                            name="admissionDate"
                            id="admissionDate"
                            label="Admission Date"
                            variant="outlined"
                            type="date"
                            inputRef={register({ required: true })}
                            defaultValue={initialState.admissionDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            inputRef={register({ required: true })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="dense"
                            name="surgeryBookedDate"
                            id="surgeryBookedDate"
                            label="Surgery Booked Date"
                            variant="outlined"
                            type="date"
                            inputRef={register}
                            defaultValue={initialState.surgeryBookedDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            inputRef={register({ required: true })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="dense"
                            name="surgeryBookedTime"
                            id="surgeryBookedTime"
                            label="Surgery Booked Time"
                            variant="outlined"
                            type="time"
                            inputRef={register}
                            defaultValue={initialState.surgeryBookedTime}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            inputRef={register({ required: true })}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="admitting-doctor"
                            variant="outlined"
                            label="Admitting Doctor"
                            name="admittingDoctor"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.admittingDoctor}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="referring-doctor"
                            variant="outlined"
                            label="Referring Doctor"
                            name="referringDoctor"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.referringDoctor}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="alternate-doctor"
                            variant="outlined"
                            label="Alternate Doctor"
                            name="alternateDoctor"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.alternateDoctor}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="general-gp"
                            variant="outlined"
                            label="General GP"
                            name="generalGp"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.generalGp}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="dense"
                            id="icd-code-diagnosis"
                            variant="outlined"
                            label="ICD Code / Diagnosis"
                            name="icdCodeDiagnosis"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.icdCodeDiagnosis}
                            fullWidth
                            multiline
                        />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="dense"
                            id="CPT-code-procedure"
                            variant="outlined"
                            label="CPT Code / Procedure"
                            name="cptCodeProcedure"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.cptCodeProcedure}
                            fullWidth
                            multiline
                        />
                    </Grid>








                </Grid>





                {/* Error reporting */}

                <Grid item xs={12} sm={12}>

                    {errors.admissionDate && (
                        <h4 style={{ color: "red" }}>
                            Please enter Admission Date
                        </h4>
                    )}
                </Grid>


                <Grid>
                    <Grid item xs={4} sm={4}></Grid>
                    <Grid item xs={4} sm={4}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ marginTop: 20 }}
                            fullWidth
                        >
                            SAVE
                        </Button>
                    </Grid>
                    <Grid item xs={4} sm={4}></Grid>
                </Grid>
            </form>


        </Container>

    )
}
export default HospitalVisitInformation;