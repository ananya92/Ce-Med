import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import API from "../../utils/API";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



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



function HospitalInformation(props) {
    const classes = useStyles();
    const { register, handleSubmit,  setValue, errors } = useForm();

    const [newRecordInfo, setNewRecordInfo] = useState({
        PatientId: props.patientId,
        CaseId: props.caseId
    });

    useEffect(() => {
        if ( newRecordInfo.CaseId) {
            API.getHospitalInformationData(newRecordInfo.CaseId).then(response => {
                setValue([
                    { bedDetails : response.data[0].bedDetails},
                    { doctor : response.data[0].doctor },
                    { preAdmissionNumber : response.data[0].preAdmissionNumber },
                    { surgeryBookedTime : response.data[0].surgeryBookedTime },
                    { timeOfArrival : response.data[0].timeOfArrival },
                    { wardDetails : response.data[0].wardDetails },
                  ])

                onSubmit();

            }).catch(error => {
                console.log("Error while getting hospital information data:", error);
            });
        }
    }, [])


    

    const onSubmit = (res) => {
        var data = {
            ...res, CaseId : newRecordInfo.CaseId
        }

        console.log(data);

        API.storeHospitalInformationData(data).then(response => {
            console.log(response);
        }).catch(error => {
            console.log("Error while adding hospital information data:", error);
        });


    };

    console.log(newRecordInfo);
    return (
        <div>
            <Container>

                <h2>Hospital Information</h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={classes.root}
                // style={{ margin: "auto", textAlign: "justify", paddingTop: 10 }}
                >
                    <h6>Hospital Use Only</h6>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                margin="dense"
                                id="doctor"
                                variant="outlined"
                                label="Doctor"
                                type="text"
                                name="doctor"
                                defaultValue=""
                                inputRef={register}
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
                                defaultValue={Date.now()}
                                // className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                inputRef={register}
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
                                // defaultValue={Date.now()}                    
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                inputRef={register}
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
                                inputRef={register}
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
                                inputRef={register}
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
                                inputRef={register}
                                fullWidth
                            />
                        </Grid>

                    </Grid>





                    <Grid item xs={12} sm={12}>

                        {errors.name && (
                            <h4 style={{ color: "red" }}>
                                USER NAME NEEDS TO BE MINIMUM 4 CHARACTORS
                            </h4>
                        )}
                        {errors.password && (
                            <h4 style={{ color: "red" }}>
                                PASSWORD NEEDS TO BE MINIMUM 4 CHARACTORS
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
                                SUBMIT
                        </Button>
                        </Grid>
                        <Grid item xs={4} sm={4}></Grid>
                    </Grid>
                </form>


            </Container>
        </div >
    )
}

export default HospitalInformation;