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

function AlternativeContact(props) {
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
    //         API.getAlternativeContact(caseInfo.CaseId).then(response => {
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

        // API.storeAlternativeContact(data).then(response => {
        //     // console.log(response);
        // }).catch(error => {
        //     console.log("Error while adding hospital information data:", error);
        // });
    };


    return (
        <div>
            <Container>

                <h2>Alternative Contact</h2>
                <h6>Person "NOT" living at the same address</h6>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={classes.root}
                // style={{ margin: "auto", textAlign: "justify", paddingTop: 10 }}
                >

                    <Grid container spacing={1}>


                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="surname"
                                variant="outlined"
                                label="Surname"
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

                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="dense"
                                id="relationshipToPatient"
                                variant="outlined"
                                label="Relationship To Patient"
                                name="relationshipToPatient"
                                type="text"
                                inputRef={register}
                                fullWidth
                            />
                        </Grid>



                        <Grid item xs={12} sm={12}>
                            <h6>Alternative Contact's Contact Details</h6>
                        </Grid>



                        <Grid item xs={12} sm={4}>
                            <TextField
                                margin="dense"
                                id="mobileNumber"
                                variant="outlined"
                                label="Mobile Number"
                                name="mobileNumber"
                                type="text"
                                inputRef={register}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                margin="dense"
                                id="workNumber"
                                variant="outlined"
                                label="Work Number"
                                name="workNumber"
                                type="text"
                                inputRef={register}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                margin="dense"
                                id="homeNumber"
                                variant="outlined"
                                label="Home Number"
                                name="homeNumber"
                                type="text"
                                inputRef={register}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <h6>Alternative Contact's Address</h6>
                        </Grid>
                        {/* Address Line 1 */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="residentialAddressLine1"
                                variant="outlined"
                                label="Address Line 1"
                                name="residentialAddressLine1"
                                type="text"
                                inputRef={register}
                                fullWidth
                            />
                        </Grid>
                        {/* Address Line 2 */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="residentialAddressLine2"
                                variant="outlined"
                                label="Address Line 2"
                                name="residentialAddressLine2"
                                type="text"
                                inputRef={register}
                                fullWidth
                            />
                        </Grid>
                        {/* Suburb */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="residentialSubrub"
                                variant="outlined"
                                label="Subrub"
                                name="residentialSubrub"
                                type="text"
                                inputRef={register}
                                fullWidth
                            />
                        </Grid>
                        {/* City  */}

                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="residentialCity"
                                variant="outlined"
                                label="City"
                                name="residentialCity"
                                type="text"
                                inputRef={register}
                                fullWidth
                            />
                        </Grid>
                        {/* Code */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="residentialCode"
                                variant="outlined"
                                label="Code"
                                name="residentialCode"
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
        </div>
    )
}

// export default AlternativeContact;
export default AlternativeContact;