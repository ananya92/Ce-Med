import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import API from "../../utils/API";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

    //setting case info
    caseInfo = {
        PatientId: props.patientId,
        CaseId: props.caseId
    };

    // Retrieving the existing value if case exists
    // useEffect(() => {
    //     if (caseInfo.CaseId) {
    //         API.getHospitalVisitInformation(caseInfo.CaseId).then(response => {
    //             // console.log(response.data[0]);
    //             setValue(
    //                 [{ bedDetails: response.data[0].bedDetails },
    //                 { doctor: response.data[0].doctor },
    //                 { preAdmissionNumber: response.data[0].preAdmissionNumber },
    //                 { surgeryBookedTime: response.data[0].surgeryBookedTime },
    //                 { timeOfArrival: response.data[0].timeOfArrival },
    //                 { wardDetails: response.data[0].wardDetails }
    //                 ]);
    //         }).catch(error => {
    //             console.log("Error while getting hospital information data:", error);
    //         });
    //     }
    // }, [])

    // saving or updating value on form submit
    const onSubmit = (res) => {
        var data = {
            ...res, CaseId: caseInfo.CaseId
        }

        // console.log(data);

        // API.storeHospitalVisitInformation(data).then(response => {
        //     // console.log(response);
        // }).catch(error => {
        //     console.log("Error while adding hospital information data:", error);
        // });
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
                            // defaultValue={Date.now()}
                            // className={classes.textField}
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
                            // defaultValue={Date.now()}
                            // className={classes.textField}
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
                            // defaultValue={Date.now()}
                            // className={classes.textField}
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
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="alternate-doctor"
                            variant="outlined"
                            label="Alternate Doctor"
                            name="AlternateDoctor"
                            type="text"
                            inputRef={register}
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
                            fullWidth
                            multiline
                        />
                    </Grid>








                </Grid>





                {/* Error reporting */}

                {/* <Grid item xs={12} sm={12}>

                        {errors.doctor && (
                            <h4 style={{ color: "red" }}>
                                Please enter Doctor Information
                            </h4>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        {errors.surgeryBookedTime && (
                            <h4 style={{ color: "red" }}>
                                Please enter Surgery Booked Time
                            </h4>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        {errors.timeOfArrival && (
                            <h4 style={{ color: "red" }}>
                                Please enter patient's Time Of Arrival
                            </h4>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        {errors.wardDetails && (
                            <h4 style={{ color: "red" }}>
                                Please enter patient's Ward Details
                            </h4>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        {errors.bedDetails && (
                            <h4 style={{ color: "red" }}>
                                Please enter patient's Bed Details
                            </h4>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        {errors.preAdmissionNumber && (
                            <h4 style={{ color: "red" }}>
                                Please enter patient's Pre Admission Number
                            </h4>
                        )}
                    </Grid> */}
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
                            SUBMIT
                        </Button>
                    </Grid>
                    <Grid item xs={4} sm={4}></Grid>
                </Grid>
            </form>


        </Container>

    )
}
export default HospitalVisitInformation;