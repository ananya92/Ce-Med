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


function Comorbidities(props) {
    const classes = useStyles();
    // react-hook-form
    const { register, handleSubmit, setValue, errors } = useForm();

    const [isSmoking, setIsSmoking] = useState("");

    const [useAlcohol, setUseAlcohol] = useState("");

    const [initialState, setInitialState] = useState(
        {
            title: "_",
            surname: "_",
            name: "_",
            gender: "_",
            dateOfBirth: moment(Date.now()).format("YYYY-MM-DD"),
            noOfSticks: "_",
            noOfStandardDrinks: "_",
            height: "_",
            weight: "_",
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

            API.getComorbiditiesData(caseInfo.CaseId).then(response => {
                console.log(JSON.stringify(response.data[0]));
                let data = response.data[0];
                if (data != undefined || data != null) {
                    setValue([
                        { chronicIscaemicHeartDisease: data.chronicIscaemicHeartDisease },
                        { congestiveHeartFailure: data.congestiveHeartFailure },
                        { unstableAngina: data.unstableAngina },
                        { hypertension: data.hypertension },
                        { hypothyroidism: data.hypothyroidism },
                        { hyperlipidaemia: data.hyperlipidaemia },
                        { diabetesInsulinDependant: data.diabetesInsulinDependant },
                        { diabetesNonInsulinDependant: data.diabetesNonInsulinDependant },
                        { chronicRenalFailure: data.chronicRenalFailure },
                        { acuteRenalFailure: data.acuteRenalFailure },
                        { renalDialysis: data.renalDialysis },
                        { chronicObstructivePulmonaryDisease: data.chronicObstructivePulmonaryDisease },
                        { asthma: data.asthma },
                        { chronicArterialFibrilation: data.chronicArterialFibrilation },
                        { epilepsy: data.epilepsy },
                        { other: data.other },
                        { smoking: data.smoking },
                        { noOfSticks: data.noOfSticks },
                        { useAlcohol: data.useAlcohol },
                        { noOfStandardDrinks: data.noOfStandardDrinks },
                        { height: data.height },
                        { weight: data.weight },
                    ]);
                }
                else {
                    console.log("There is no saved Comorbidities data");
                }
            }).catch(error => {
                console.log("Error while getting Comorbidities data:", error);
            });
        }
    }, [])



    // saving or updating value on form submit
    const onSubmit = (res) => {
        var data = {
            ...res, CaseId: caseInfo.CaseId
        }

        console.log(data);

        API.storeComorbiditiesData(data).then(response => {
            // console.log(response);
        }).catch(error => {
            console.log("Error while adding Patient's Comorbidities data:", error);
        });
    };

    const handleChangeSmok = (event) => {
        setIsSmoking(event.target.value);
    };

    const handleChangeDrink = (event) => {
        setUseAlcohol(event.target.value);
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
                            defaultValue={initialState.gender}
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
                        <h4>Comorbidities</h4>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="chronic-iscaemic-heart-disease"  >
                                Chronic Iscaemic Heart Disease
                            </InputLabel>
                            <Select
                                id="chronicIscaemicHeartDisease"
                                native
                                label="Chronic Iscaemic Heart Disease"
                                fullWidth
                                inputRef={register}
                                name="chronicIscaemicHeartDisease"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="congestive-heart-failure">
                                Congestive Heart Failure
                            </InputLabel>
                            <Select
                                id="congestiveHeartFailure"
                                native
                                label="Congestive Heart Failure"
                                fullWidth
                                inputRef={register}
                                name="congestiveHeartFailure"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="unstable-angina">
                                Unstable Angina
                            </InputLabel>
                            <Select
                                id="unstableAngina"
                                native
                                label="Unstable Angina"
                                fullWidth
                                inputRef={register}
                                name="unstableAngina"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="hypertension">
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

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="hypothyroidism">
                                Hypothyroidism
                            </InputLabel>
                            <Select
                                id="hypothyroidism"
                                native
                                label="Hypothyroidism"
                                fullWidth
                                inputRef={register}
                                name="hypothyroidism"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="hyperlipidaemia">
                                Hyperlipidaemia
                            </InputLabel>
                            <Select
                                id="hyperlipidaemia"
                                native
                                label="Hyperlipidaemia"
                                fullWidth
                                inputRef={register}
                                name="hyperlipidaemia"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>


                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="diabetes-insulin-dependant">
                                Diabetes (Insulin Dependant)
                            </InputLabel>
                            <Select
                                id="diabetesInsulinDependant"
                                native
                                label="Diabetes (Insulin Dependant)"
                                fullWidth
                                inputRef={register}
                                name="diabetesInsulinDependant"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="diabetes-non-insulin-dependant">
                                Diabetes (Non-Insulin Dependant)
                            </InputLabel>
                            <Select
                                id="diabetesNonInsulinDependant"
                                native
                                label="Diabetes (Non-Insulin Dependant)"
                                fullWidth
                                inputRef={register}
                                name="diabetesNonInsulinDependant"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="chronic-renal-failure">
                                Chronic Renal Failure
                            </InputLabel>
                            <Select
                                id="chronicRenalFailure"
                                native
                                label="Chronic Renal Failure"
                                fullWidth
                                inputRef={register}
                                name="chronicRenalFailure"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="acute-renal-failure">
                                Acute Renal Failure
                            </InputLabel>
                            <Select
                                id="acuteRenalFailure"
                                native
                                label="Acute Renal Failure"
                                fullWidth
                                inputRef={register}
                                name="acuteRenalFailure"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="renal-dialysis">
                                Renal Dialysis
                        </InputLabel>
                            <Select
                                id="renalDialysis"
                                native
                                label="Renal Dialysis"
                                fullWidth
                                inputRef={register}
                                name="renalDialysis"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="chronic-obstructive-pulmonary-disease">
                                Chronic Obstructive Pulmonary Disease
                            </InputLabel>
                            <Select
                                id="chronicObstructivePulmonaryDisease"
                                native
                                label="Chronic Obstructive Pulmonary Disease"
                                fullWidth
                                inputRef={register}
                                name="chronicObstructivePulmonaryDisease"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="asthma">
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


                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="chronic-arterial-fibrilation">
                                Chronic Arterial Fibrilation / Flutter
                            </InputLabel>
                            <Select
                                id="chronicArterialFibrilation"
                                native
                                label="Chronic Arterial Fibrilation / Flutter"
                                fullWidth
                                inputRef={register}
                                name="chronicArterialFibrilation"
                                type="text"
                                defaultValue="No"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="epilepsy">
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

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="other"
                            variant="outlined"
                            label="Other"
                            name="other"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.other}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <h4>Other Information</h4>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="smoking">
                                Smoking
                            </InputLabel>
                            <Select
                                id="smoking"
                                native
                                label="Smoking"
                                fullWidth
                                inputRef={register}
                                name="smoking"
                                type="text"
                                defaultValue="No"
                                onChange={handleChangeSmok}
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    {isSmoking === "Yes" ?
                        <Grid item xs={6} sm={6}>
                            <FormControl margin="dense" variant="outlined" fullWidth>
                                <InputLabel htmlFor="no-of-sticks">
                                    No of Sticks
                            </InputLabel>
                                <Select
                                    id="noOfSticks"
                                    native
                                    label="No of Sticks"
                                    fullWidth
                                    inputRef={register}
                                    name="noOfSticks"
                                    type="text"
                                    defaultValue=""
                                >
                                    <option value="1-3 per week">1-3 per week</option>
                                    <option value="4-8 per week">4-8per week</option>
                                    <option value="9-16 per week">9-16 per week</option>
                                    <option value="17-32 per week">17-32 per week</option>
                                    <option value="33-64 per week">32-64 per week</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        : null}


                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="use-alcohol">
                                Alcohol use
                            </InputLabel>
                            <Select
                                id="useAlcohol"
                                native
                                label="Alcohol use"
                                fullWidth
                                inputRef={register}
                                name="useAlcohol"
                                type="text"
                                defaultValue="No"
                                onChange={handleChangeDrink}
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    {useAlcohol === "Yes" ?
                        <Grid item xs={6} sm={6}>
                            <FormControl margin="dense" variant="outlined" fullWidth>
                                <InputLabel htmlFor="no-of-sticks">
                                    No of Standard Drinks
                            </InputLabel>
                                <Select
                                    id="noOfStandardDrinks"
                                    native
                                    label="No Of Standard Drinks"
                                    fullWidth
                                    inputRef={register}
                                    name="noOfStandardDrinks"
                                    type="text"
                                    defaultValue=""
                                >
                                    <option value="1-3 per week">1-3 per week</option>
                                    <option value="4-8 per week">4-8per week</option>
                                    <option value="9-16 per week">9-16 per week</option>
                                    <option value="17-32 per week">17-32 per week</option>
                                    <option value="33-64 per week">32-64 per week</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        : null}

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="height"
                            variant="outlined"
                            label="Height"
                            name="height"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.height}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="weight"
                            variant="outlined"
                            label="Weight"
                            name="weight"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.weight}
                            fullWidth
                        />
                    </Grid>


                </Grid>

                {/* Error reporting */}

                {/*<Grid item xs={12} sm={12}>

                    {errors.dateVitalsAreRead && (
                        <h4 style={{ color: "red" }}>
                            Please enter Date Vitals Are Read
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
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
            </form >


        </Container >

    )
}

export default Comorbidities;