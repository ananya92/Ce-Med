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

function MedicalAidInformation(props) {
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
    //         API.getMedicalAidInformation(caseInfo.CaseId).then(response => {
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

        // API.storeMedicalAidInformation(data).then(response => {
        //     // console.log(response);
        // }).catch(error => {
        //     console.log("Error while adding hospital information data:", error);
        // });
    };


    return (

        <Container>

            <h2>Medical Aid Information</h2>
            <h6>Please record details as per Medical Aid Card</h6>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.root}
            // style={{ margin: "auto", textAlign: "justify", paddingTop: 10 }}
            >

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="medicalAidScheme"
                            variant="outlined"
                            label="Medical Aid Scheme"
                            name="medicalAidScheme"
                            type="text"
                            inputRef={register({ required: true })}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="plan"
                            variant="outlined"
                            label="Plan"
                            name="plan"
                            type="text"
                            inputRef={register}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="memberNumber"
                            variant="outlined"
                            label="Member Number"
                            name="memberNumber"
                            type="text"
                            inputRef={register({ required: true })}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="authorisationNumber"
                            variant="outlined"
                            label="Authorisation Number"
                            name="authorisationNumber"
                            type="text"
                            inputRef={register}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <h6>Principal Member Details</h6>
                    </Grid>



                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="surname"
                            variant="outlined"
                            label="Principal Member Surname"
                            name="surname"
                            type="text"
                            inputRef={register({ required: true })}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="name"
                            variant="outlined"
                            label="Name"
                            name="name"
                            type="text"
                            inputRef={register}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <TextField
                            margin="dense"
                            id="initials"
                            variant="outlined"
                            label="Initials"
                            name="initials"
                            type="text"
                            inputRef={register}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="title"  >
                                Title
                                </InputLabel>
                            <Select
                                id="title"
                                native
                                label="Title"
                                fullWidth
                                inputRef={register({ required: true })}
                                name="title"
                                type="text"
                            // onChange={handleChange}
                            >
                                <option aria-label="None" value="Title" />
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                                <option value="Ms">Ms</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="saIdNumber"
                            variant="outlined"
                            label="SA ID Number"
                            name="saIdNumber"
                            type="text"
                            inputRef={register}
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

                    <Grid item xs={12} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="gender"  >
                                Gender
                                </InputLabel>
                            <Select
                                id="gender"
                                native
                                label="gender"
                                fullWidth
                                inputRef={register({ required: true })}
                                name="gender"
                                type="text"
                            // onChange={handleChange}
                            >
                                <option aria-label="None" value="Gender" />
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Other">Other</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="dependantCode"
                            variant="outlined"
                            label="Dependant Code"
                            name="dependantCode"
                            type="text"
                            inputRef={register}
                            fullWidth
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
export default MedicalAidInformation;