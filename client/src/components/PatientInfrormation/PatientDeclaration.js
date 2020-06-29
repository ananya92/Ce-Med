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


function PatientDeclaration(props) {
    const classes = useStyles();
    // react-hook-form
    const { register, handleSubmit, setValue, errors } = useForm();
    // const [initialState, setInitialState] = useState(
    //     {
    //         id: 0,
    //         bedDetails: "Bed detail",
    //         doctor: "Doctor",
    //         preAdmissionNumber: "123456",
    //         surgeryBookedTime: moment(Date.now()).format("YYYY-MM-DDTkk:mm"),
    //         timeOfArrival: moment(Date.now()).format("YYYY-MM-DDTkk:mm"),
    //         wardDetails: "Ward Name"
    //     }
    // );

    //setting case info
    caseInfo = {
        PatientId: props.patientId,
        CaseId: props.caseId
    };

    // Retrieving the existing value if case exists
    useEffect(() => {
        // if (caseInfo.CaseId) {
        //     API.getPatientDeclarationData(caseInfo.CaseId).then(response => {
        //         console.log(JSON.stringify(response.data[0]));
        //         let data = response.data[0];
        //         //This part is not used as of now.
        //         let retrievedData = {
        //             id: data.id,
        //             bedDetails: data.bedDetails,
        //             doctor: data.doctor,
        //             preAdmissionNumber: data.preAdmissionNumber,
        //             surgeryBookedTime: moment(data.surgeryBookedTime).format("YYYY-MM-DDTkk:mm"),
        //             timeOfArrival: moment(data.timeOfArrival).format("YYYY-MM-DDTkk:mm"),
        //             wardDetails: data.wardDetails
        //         }
        //         console.log(retrievedData);
        //         setTimeout(() => setInitialState(retrievedData));

        //         //This part is for stting the current value in the input box

        //         setValue(
        //             [{ bedDetails: data.bedDetails },
        //             { doctor: data.doctor },
        //             { preAdmissionNumber: data.preAdmissionNumber },
        //             { surgeryBookedTime: moment(data.surgeryBookedTime).format("YYYY-MM-DDTkk:mm") },
        //             { timeOfArrival: moment(data.timeOfArrival).format("YYYY-MM-DDTkk:mm") },
        //             { wardDetails: data.wardDetails }
        //             ]);

        //     }).catch(error => {
        //         console.log("Error while getting hospital information data:", error);
        //     });
        // }
    }, [])



    // saving or updating value on form submit
    const onSubmit = (res) => {
        var data = {
            ...res, CaseId: caseInfo.CaseId
        }

        console.log(data);

        // API.storePatientDeclaration(data).then(response => {
        //     // console.log(response);
        // }).catch(error => {
        //     console.log("Error while adding hospital information data:", error);
        // });
    };


    return (

        <Container>

            <h4>Patients please take note of the following:</h4>
            {/* <p>Infomation ID : {initialState.id}</p> */}

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.root}
            style={{ margin: "auto", textAlign: "justify", paddingTop: 10 }}
            >

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <ul>
                            <li><strong>Private Patients - </strong> A prepayment is required on hospitalisation from patients not covered by medical aid. It is suggested that private patients contact the accounts department prior to admission to establish the estimated hospital cost.</li>
                            <li><strong>Medical Aid Patients - </strong> Please consult with your medical aid prior to admission obtaining pre-authorisation if necessary. A short payments by your medical aid will be for your own account.</li>
                            <li><strong>Medical Aid Card and ID Book - </strong> Must be produced on admission otherwise patient will be treated as private.</li>
                            <li><strong>Private/Semi Private Wards - </strong> Medical aid patients requesting private wards will be expected to pay the private ward rate on admission. Please note that private wards are subject to availability.</li>
                            <li>I hereby declare that the information I have provided is true and correct and agree to the terms and conditions as set out above.</li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="name"
                            variant="outlined"
                            label="Name"
                            name="name"
                            type="text"
                            inputRef={register({ required: true })}
                            fullWidth
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
                            // defaultValue={Date.now()}
                            // className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            inputRef={register({ required: true })}
                        />
                    </Grid>

                </Grid>



                {/* Error reporting

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


export default PatientDeclaration;