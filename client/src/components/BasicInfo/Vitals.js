import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import API from "../../utils/API";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import moment from "moment";




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


function Vitals(props) {
    const classes = useStyles();
    // react-hook-form
    const { register, handleSubmit, setValue, errors } = useForm();

    const [initialState, setInitialState] = useState(
        {
            title: "_",
            name: "_",
            surname: "_",
            gender: "_",
            dateOfBirth: moment(Date.now()).format("YYYY-MM-DD"),
            dateVitalsAreRead: moment(Date.now()).format("YYYY-MM-DD"),
            timeVitalsAreRead: moment(Date.now()).format("hh:mm"),
            bPSystolic: "_",
            bPDiastolic: "_",
            temp: "_",
            pulse: "_",
            respiration: "_",
            saturation: "_",
            oxygenMethod: "_",
            oxygenPercentage: "_",
            oxygenFlow: "_",
            oxygenPercentageGiven: "_",
            primaryDiagnosis: "_",
            secondaryDiagnosis: "_",
            surgicalProcedure: "_",
            additionalProcedures: "_",
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
            API.getPatientPersonalInformationData(caseInfo.CaseId).then(response => {
                // console.log(JSON.stringify(response.data[0]));
                let data = response.data[0];
                if (data != undefined || data != null) {
                    setValue([
                        { title: data.title },
                        { name: data.name },
                        { surname: data.surname },
                        { gender: data.gender },
                        { dateOfBirth: moment(data.dateOfBirth).format("YYYY-MM-DD") },
                    ]);
                }
                else {
                    console.log("There is no saved Patient's Personal Information data");
                }
            }).catch(error => {
                console.log("Error while getting Patient's Personal Information data:", error);
            });

            API.getVitalsData(caseInfo.CaseId).then(response => {
                console.log(JSON.stringify(response.data[0]));
                let data = response.data[0];
                if (data != undefined || data != null) {
                    setValue([
                        { dateVitalsAreRead: moment(Date.now()).format("YYYY-MM-DD") },
                        { timeVitalsAreRead: moment(Date.now()).format("hh:mm") },
                        { bPSystolic: data.bPSystolic },
                        { bPDiastolic: data.bPDiastolic },
                        { temp: data.temp },
                        { pulse: data.pulse },
                        { respiration: data.respiration },
                        { saturation: data.saturation },
                        { oxygenMethod: data.oxygenMethod },
                        { oxygenPercentage: data.oxygenPercentage },
                        { oxygenFlow: data.oxygenFlow },
                        { oxygenPercentageGiven: data.oxygenPercentageGiven },
                    ]);
                }
                else {
                    console.log("There is no saved Vitals data");
                }
            }).catch(error => {
                console.log("Error while getting Vitals data:", error);
            });
        }
    }, [])



    // saving or updating value on form submit
    const onSubmit = (res) => {
        var data = {
            ...res, CaseId: caseInfo.CaseId
        }

        console.log(data);

        API.storeVitalsData(data).then(response => {
            // console.log(response);
        }).catch(error => {
            console.log("Error while adding Patient's Vitals data:", error);
        });
    };


    return (

        <Container>
            <h4>Personal Information</h4>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.root}
            // style={{ margin: "auto", textAlign: "justify", paddingTop: 10 }}
            >

                <Grid container spacing={1}>

                    <Grid item xs={12} sm={2}>
                        <TextField
                            margin="dense"
                            id="title"
                            variant="outlined"
                            label="Title"
                            name="title"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.name}
                            fullWidth
                            disabled
                        />
                    </Grid>

                    <Grid item xs={12} sm={5}>
                        <TextField
                            margin="dense"
                            id="name"
                            variant="outlined"
                            label="Name"
                            name="name"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.name}
                            fullWidth
                            disabled
                        />
                    </Grid>

                    <Grid item xs={12} sm={5}>
                        <TextField
                            margin="dense"
                            id="surname"
                            variant="outlined"
                            label="Surname"
                            name="surname"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.surname}
                            fullWidth
                            disabled
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="gender"
                            variant="outlined"
                            label="Gender"
                            name="gender"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.surname}
                            fullWidth
                            disabled
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            name="dateOfBirth"
                            id="dateOfBirth"
                            label="Date Of Birth"
                            variant="outlined"
                            type="date"
                            defaultValue={moment(Date.now()).format("YYYY-MM-DD")}
                            // className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            disabled
                            inputRef={register}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <h4>Vitals</h4>
                    </Grid>
                    <Grid item xs={12} sm={12}>

                        <Button
                            target="_blank"
                            href="http://www.google.com/"
                            variant="contained"                    
                            color="primary"
                        >
                            Graph
                    </Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            name="dateVitalsAreRead"
                            id="dateVitalsAreRead"
                            label="date Vitals are Read"
                            variant="outlined"
                            type="date"
                            defaultValue={initialState.dateVitalsAreRead}
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
                            name="timeVitalsAreRead"
                            id="timeVitalsAreRead"
                            label="Time Vitals are Read"
                            variant="outlined"
                            type="time"
                            defaultValue={initialState.timeVitalsAreRead}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            inputRef={register({ required: true })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={6}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="bPSystolic"
                                        variant="outlined"
                                        label="BP (Systolic)"
                                        name="bPSystolic"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.bPSystolic}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="bPDiastolic"
                                        variant="outlined"
                                        label="BP (Diastolic)"
                                        name="bPDiastolic"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.bPDiastolic}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="temp"
                                        variant="outlined"
                                        label="Temperature"
                                        name="temp"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.temp}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="pulse"
                                        variant="outlined"
                                        label="Pulse"
                                        name="pulse"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.pulse}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="respiration"
                                        variant="outlined"
                                        label="Respiration"
                                        name="respiration"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.respiration}
                                        fullWidth
                                    />
                                </Grid>

                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="saturation"
                                        variant="outlined"
                                        label="Saturation"
                                        name="saturation"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.saturation}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="oxygenMethod"
                                        variant="outlined"
                                        label="Oxygen Method"
                                        name="oxygenMethod"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.oxygenMethod}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="oxygenPercentage"
                                        variant="outlined"
                                        label="Oxygen %"
                                        name="oxygenPercentage"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.oxygenPercentage}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="oxygenFlow"
                                        variant="outlined"
                                        label="Oxygen Flow (L)"
                                        name="oxygenFlow"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.oxygenFlow}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="oxygenPercentageGiven"
                                        variant="outlined"
                                        label="Oxygen % Given"
                                        name="oxygenPercentageGiven"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.oxygenPercentageGiven}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>





                {/* Error reporting */}

                <Grid item xs={12} sm={12}>

                    {errors.dateVitalsAreRead && (
                        <h4 style={{ color: "red" }}>
                            Please enter Date Vitals Are Read
                        </h4>
                    )}
                </Grid>
                {/*<Grid item xs={12} sm={12}>
                    {errors.secondaryDiagnosis && (
                        <h4 style={{ color: "red" }}>
                            Please enter Secondary Diagnosis
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.surgicalProcedure && (
                        <h4 style={{ color: "red" }}>
                            Please enter Surgical Procedure
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.additionalProcedures && (
                        <h4 style={{ color: "red" }}>
                            Please enter Additional Procedures
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
                            SAVE
                        </Button>
                    </Grid>
                    <Grid item xs={4} sm={4}></Grid>
                </Grid>
            </form>


        </Container >

    )
}

export default Vitals;