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
            surname: "_",
            name: "_",
            gender: "_",
            dateOfBirth: moment(Date.now()).format("YYYY-MM-DD"),           
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
                console.log(JSON.stringify(response.data[0]));
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

            // API.getDiagnosisData(caseInfo.CaseId).then(response => {
            //     console.log(JSON.stringify(response.data[0]));
            //     let data = response.data[0];
            //     if (data != undefined || data != null) {
            //         setValue([
            //             { primaryDiagnosis: data.primaryDiagnosis },
            //             { secondaryDiagnosis: data.secondaryDiagnosis },
            //             { surgicalProcedure: data.surgicalProcedure },
            //             { additionalProcedures: data.additionalProcedures },

            //         ]);
            //     }
            //     else {
            //         console.log("There is no saved Diagnosis data");
            //     }
            // }).catch(error => {
            //     console.log("Error while getting Diagnosis data:", error);
            // });
        }
    }, [])



    // saving or updating value on form submit
    const onSubmit = (res) => {
        var data = {
            ...res, CaseId: caseInfo.CaseId
        }

        console.log(data);

        API.storeDiagnosisData(data).then(response => {
            // console.log(response);
        }).catch(error => {
            console.log("Error while adding Patient's Personal Information data:", error);
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
                        <h6>Other Details</h6>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="dense"
                            id="primary-diagnosis"
                            variant="outlined"
                            label="Primary Diagnosis"
                            name="primaryDiagnosis"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.primaryDiagnosis}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="dense"
                            id="secondary-diagnosis"
                            variant="outlined"
                            label="Secondary Diagnosis"
                            name="secondaryDiagnosis"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.secondaryDiagnosis}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="dense"
                            id="surgical-procedure"
                            variant="outlined"
                            label="Surgical Procedure"
                            name="surgicalProcedure"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.surgicalProcedure}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="dense"
                            id="additional-procedures"
                            variant="outlined"
                            label="Additional Procedures"
                            name="additionalProcedures"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.additionalProcedures}
                            fullWidth
                        />
                    </Grid>

                </Grid>





                {/* Error reporting */}

                <Grid item xs={12} sm={12}>

                    {errors.identifierType && (
                        <h4 style={{ color: "red" }}>
                            Please enter Identifier Type Information
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.identifierNumber && (
                        <h4 style={{ color: "red" }}>
                            Please enter Identifier Number
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.surname && (
                        <h4 style={{ color: "red" }}>
                            Please enter Surname
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.title && (
                        <h4 style={{ color: "red" }}>
                            Please enter Title
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.dateOfBirth && (
                        <h4 style={{ color: "red" }}>
                            Please enter patient's date Of birth
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.residentialAddressLine1 && (
                        <h4 style={{ color: "red" }}>
                            Please enter residential Address Line 1
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.postalAddressLine1 && (
                        <h4 style={{ color: "red" }}>
                            Please enter postal Address Line 1
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


        </Container >

    )
}

export default Vitals;