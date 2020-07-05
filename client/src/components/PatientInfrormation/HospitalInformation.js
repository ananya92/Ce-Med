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


function HospitalInformation(props) {
    const classes = useStyles();
    // react-hook-form
    const { register, handleSubmit, setValue, errors } = useForm();
    const [initialState, setInitialState] = useState(
        {
            bedDetails: "_",
            doctor: "_",
            preAdmissionNumber: "_",
            surgeryBookedTime: moment(Date.now()).format("YYYY-MM-DDTkk:mm"),
            timeOfArrival: moment(Date.now()).format("YYYY-MM-DDTkk:mm"),
            wardDetails: "_"
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
            API.getHospitalInformationData(caseInfo.CaseId).then(response => {
                // console.log(JSON.stringify(response.data[0]));
                let data = response.data[0];
                //this part is needed if need to update initial values 
                // if (data != undefined || data != null) {
                //     let retrievedData = {
                //         id: data.id,
                //         bedDetails: data.bedDetails,
                //         doctor: data.doctor,
                //         preAdmissionNumber: data.preAdmissionNumber,
                //         surgeryBookedTime: moment(data.surgeryBookedTime).format("YYYY-MM-DDTkk:mm"),
                //         timeOfArrival: moment(data.timeOfArrival).format("YYYY-MM-DDTkk:mm"),
                //         wardDetails: data.wardDetails
                //     }
                //     console.log(retrievedData);
                //     setTimeout(() => setInitialState(retrievedData));
                // } else {
                //     console.log("There is no saved data");
                // }

                //This part is for stting the current value in the input box
                if (data != undefined || data != null) {
                    setValue(
                        [{ bedDetails: data.bedDetails },
                        { doctor: data.doctor },
                        { preAdmissionNumber: data.preAdmissionNumber },
                        { surgeryBookedTime: moment(data.surgeryBookedTime).format("YYYY-MM-DDTkk:mm") },
                        { timeOfArrival: moment(data.timeOfArrival).format("YYYY-MM-DDTkk:mm") },
                        { wardDetails: data.wardDetails }
                        ]);
                } else {
                    console.log("There is no saved data");
                }
            }).catch(error => {
                console.log("Error while getting hospital information data:", error);
            });
        }
    }, [])



    // saving or updating value on form submit
    const onSubmit = (res) => {
        var data = {
            ...res, CaseId: caseInfo.CaseId
        }

        // console.log(data);

        API.storeHospitalInformationData(data).then(response => {
            // console.log(response);
        }).catch(error => {
            console.log("Error while adding hospital information data:", error);
        });
    };


    return (

        <Container>

            <h4>Hospital Use Only</h4>
            {/* <p>Infomation ID : {initialState.id}</p> */}

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.root}
            // style={{ margin: "auto", textAlign: "justify", paddingTop: 10 }}
            >

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="dense"
                            id="doctor"
                            variant="outlined"
                            label="Doctor"
                            type="text"
                            name="doctor"
                            defaultValue={initialState.doctor}
                            inputRef={register({ required: true })}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            name="surgeryBookedTime"
                            id="surgeryBookedTime"
                            label="Surgery Booked Time"
                            variant="outlined"
                            type="datetime-local"
                            defaultValue={initialState.surgeryBookedTime}
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
                            name="timeOfArrival"
                            id="timeOfArrival"
                            label="Time Of Arrival"
                            variant="outlined"
                            type="datetime-local"
                            defaultValue={initialState.timeOfArrival}
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
                            id="wardDetails"
                            variant="outlined"
                            label="Ward Details"
                            name="wardDetails"
                            type="text"
                            defaultValue={initialState.wardDetails}
                            inputRef={register({ required: true })}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="bedDetails"
                            variant="outlined"
                            label="Bed Details"
                            name="bedDetails"
                            type="text"
                            defaultValue={initialState.bedDetails}
                            inputRef={register({ required: true })}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="preAdmissionNumber"
                            variant="outlined"
                            label="Pre Admission Number"
                            name="preAdmissionNumber"
                            type="text"
                            defaultValue={initialState.preAdmissionNumber}
                            inputRef={register({ required: true })}
                            fullWidth
                        />
                    </Grid>

                </Grid>



                {/* Error reporting */}

                <Grid item xs={12} sm={12}>

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

export default HospitalInformation;