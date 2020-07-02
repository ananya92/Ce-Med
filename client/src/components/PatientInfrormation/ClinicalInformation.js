import React, { useEffect, useState } from "react";
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

function ClinicalInformation(props) {
    const classes = useStyles();
    // react-hook-form
    const { register, handleSubmit, setValue, errors } = useForm();

    const [isDiabetic, setIsDiabetic] = useState(false);

    const [initialState, setInitialState] = useState(
        {
            id: 0,
            symptoms: " ",
            others: "Nil"
        }
    );


    //setting case info
    caseInfo = {
        PatientId: props.patientId,
        CaseId: props.caseId
    };

    // Retrieving the existing value if case exists
    // useEffect(() => {
    //     if (caseInfo.CaseId) {
    //         API.getClinicalInformation(caseInfo.CaseId).then(response => {
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

        console.log(data);

        // API.storeClinicalInformation(data).then(response => {
        //     // console.log(response);
        // }).catch(error => {
        //     console.log("Error while adding hospital information data:", error);
        // });
    };

    const handleChange = (event) => {
        setIsDiabetic(event.target.value);
    };

    return (

        <Container>

            <h2>Clinical Information</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.root}
            // style={{ margin: "auto", textAlign: "justify", paddingTop: 10 }}
            >

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <h6>Please provide a brief description of the symptoms/complaints present when visiting the doctor</h6>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="dense"
                            id="symptoms"
                            variant="outlined"
                            label="Symptoms/Complaints"
                            name="symptoms"
                            type="text"
                            // helperText="Please provide a brief description of the symptoms/complaints present when visiting the doctor"
                            multiline
                            inputRef={register({ required: true })}
                            defaultValue={initialState.symptoms}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <h6>Should you be suffering from Diabetes Mellitus, Please indicate which form of control is being practiced?</h6>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel
                                htmlFor="diabetes-tablets"
                            // helperText="Should you be suffering from Diabetes Mellitus, Please indicate which form of control is being practiced?"
                            >
                                Suffering from Diabetes Mellitus?
                                </InputLabel>
                            <Select
                                id="diabetes"
                                native
                                label="Suffering from Diabetes Mellitus?"
                                fullWidth

                                inputRef={register}
                                name="diabetes"
                                type="text"
                                onChange={handleChange}
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>

                    {isDiabetic == "Yes" ?
                        <React.Fragment>
                            <Grid item xs={6} sm={3}>
                                <FormControl margin="dense" variant="outlined" fullWidth>
                                    <InputLabel htmlFor="diabetes-tablets"  >
                                        Tablets
                                </InputLabel>
                                    <Select
                                        id="diabetes-tablets"
                                        native
                                        label="Tablets"
                                        fullWidth
                                        inputRef={register}
                                        name="diabetesTablets"
                                        type="text"
                                        defaultValue="No"
                                    >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <FormControl margin="dense" variant="outlined" fullWidth>
                                    <InputLabel htmlFor="diabetes-insulin"  >
                                        Insulin
                                </InputLabel>
                                    <Select
                                        id="diabetes-insulin"
                                        native
                                        label="Insulin"
                                        fullWidth
                                        inputRef={register}
                                        name="diabetesInsulin"
                                        type="text"
                                        defaultValue="No"
                                    >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <FormControl margin="dense" variant="outlined" fullWidth>
                                    <InputLabel htmlFor="diabetes-diet"  >
                                        Diet
                                </InputLabel>
                                    <Select
                                        id="diabetes-diet"
                                        native
                                        label="Diet"
                                        fullWidth
                                        inputRef={register}
                                        name="diabetesDiet"
                                        type="text"
                                        defaultValue="No"
                                    >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <FormControl margin="dense" variant="outlined" fullWidth>
                                    <InputLabel htmlFor="diabetes-none"  >
                                        None
                                </InputLabel>
                                    <Select
                                        id="diabetes-none"
                                        native
                                        label="None"
                                        fullWidth
                                        inputRef={register}
                                        name="diabetesNone"
                                        type="text"
                                        defaultValue="No"
                                    >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>

                                    </Select>
                                </FormControl>
                            </Grid>
                        </React.Fragment>
                        : null}

                    <Grid item xs={12} sm={12}>
                        <h6>Do you suffer from any of the following chronic conditions/illness? (Please indicate below)</h6>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="hypertension"  >
                                Hypertension
                                </InputLabel>
                            <Select
                                id="hypertension"
                                native
                                label="Hypertension"
                                fullWidth
                                inputRef={register}
                                name="hypertension"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="multiple-sclerosis"  >
                                Multiple Sclerosis
                                </InputLabel>
                            <Select
                                id="multiple-sclerosis"
                                native
                                label="Multiple Sclerosis"
                                fullWidth
                                inputRef={register}
                                name="multipleSclerosis"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="cholestrol"  >
                                Cholestrol
                                </InputLabel>
                            <Select
                                id="cholestrol"
                                native
                                label="Cholestrol"
                                fullWidth
                                inputRef={register}
                                name="cholestrol"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="emphysema"  >
                                Emphysema
                                </InputLabel>
                            <Select
                                id="emphysema"
                                native
                                label="Emphysema"
                                fullWidth
                                inputRef={register}
                                name="emphysema"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="asthma"  >
                                Asthma
                                </InputLabel>
                            <Select
                                id="asthma"
                                native
                                label="Asthma"
                                fullWidth
                                inputRef={register}
                                name="asthma"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="epilepsy"  >
                                Epilepsy
                                </InputLabel>
                            <Select
                                id="epilepsy"
                                native
                                label="Epilepsy"
                                fullWidth
                                inputRef={register}
                                name="epilepsy"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="thyroid-disorder"  >
                                Thyroid Disorder
                                </InputLabel>
                            <Select
                                id="thyroid-disorder"
                                native
                                label="Thyroid Disorder"
                                fullWidth
                                inputRef={register}
                                name="thyroidDisorder"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="lupus"  >
                                Lupus
                                </InputLabel>
                            <Select
                                id="lupus"
                                native
                                label="Lupus"
                                fullWidth
                                inputRef={register}
                                name="lupus"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="depression"  >
                                Depression
                                </InputLabel>
                            <Select
                                id="depression"
                                native
                                label="Depression"
                                fullWidth
                                inputRef={register}
                                name="depression"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="heart-failure"  >
                                Heart Failure
                                </InputLabel>
                            <Select
                                id="heart-failure"
                                native
                                label="Heart Failure"
                                fullWidth
                                inputRef={register}
                                name="heartFailure"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="porphyria"  >
                                Porphyria
                                </InputLabel>
                            <Select
                                id="porphyria"
                                native
                                label="Porphyria"
                                fullWidth
                                inputRef={register}
                                name="porphyria"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="dense"
                            id="others"
                            variant="outlined"
                            label="Others"
                            name="others"
                            type="text"
                            defaultValue="Nil"
                            // helperText="Please provide a brief description of the symptoms/complaints present when visiting the doctor"
                            multiline
                            inputRef={register}
                            fullWidth
                        />
                    </Grid>
                </Grid>





                {/* Error reporting */}

                <Grid item xs={12} sm={12}>

                    {errors.symptoms && (
                        <h4 style={{ color: "red" }}>
                            Please enter Symptoms/Complaints
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

export default ClinicalInformation;