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


function PatientStatus(props) {
    const classes = useStyles();

    const [isOthers, setOthers] = useState("");

    // react-hook-form
    const { register, handleSubmit, setValue, errors } = useForm();

    const [initialState, setInitialState] = useState(
        {
            title: "_",
            surname: "_",
            name: "_",
            gender: "_",
            dateOfBirth: moment(Date.now()).format("YYYY-MM-DD"),
            specialisedCriticalCare: "Other",
            other: "_",
            criticalCare: "No",
            highCare: "No",
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

            API.getPatientStatusData(caseInfo.CaseId).then(response => {
                // console.log(JSON.stringify(response.data[0]));
                let data = response.data[0];
                if (data != undefined || data != null) {
                    setValue([
                        { specialisedCriticalCare: data.specialisedCriticalCare },
                        { other: data.other },
                        { criticalCare: data.criticalCare },
                        { highCare: data.highCare },
                    ]);

                     // In order to set second time after first dom update
                    //  console.log(data);
                     if (data.specialisedCriticalCare === "Other") {
                        // console.log(data);
                        setOthers("Other");
                        setValue([
                            { other: data.other },
                        ])
                    }

                }
                else {
                    console.log("There is no saved Patient Status data");
                }
            }).catch(error => {
                console.log("Error while getting Patient Status data:", error);
            });
        }
    }, [])



    // saving or updating value on form submit
    const onSubmit = (res) => {
        var data = {
            ...res, CaseId: caseInfo.CaseId
        }

        console.log(data);

        API.storePatientStatusData(data).then(response => {
            // console.log(response);
        }).catch(error => {
            console.log("Error while adding Patient's Status data:", error);
        });
    };

    const handleChange = (event) => {
        setOthers(event.target.value);
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
                        <h4>Patient Status Details</h4>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="specialised-critical-care">
                                Patient Status
                        </InputLabel>
                            <Select
                                id="specialisedCriticalCare"
                                native
                                label="Specialised Critical Care"
                                fullWidth
                                inputRef={register({ required: true })}
                                onChange={handleChange}
                                defaultValue={initialState.specialisedCriticalCare}
                                name="specialisedCriticalCare"
                                type="text"
                            >
                                <option aria-label="None" value="Specialised Critical Care Type" />
                                <option value="Cardiac">Cardiac</option>
                                <option value="Renal">Renal</option>
                                <option value="Oncology">Oncology</option>
                                <option value="Neuro">Neuro</option>
                                <option value="Other">Other</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    {isOthers === "Other" ?
                        <React.Fragment>
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
                        </React.Fragment>
                        : null}
                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="critical-care"  >
                                Critical Care
                                </InputLabel>
                            <Select
                                id="critical-care"
                                native
                                label="criticalCare"
                                fullWidth
                                inputRef={register}
                                name="criticalCare"
                                type="text"
                                defaultValue={initialState.criticalCare}
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="high-care"  >
                                High Care
                            </InputLabel>
                            <Select
                                id="highCare"
                                native
                                label="highCare"
                                fullWidth
                                inputRef={register}
                                name="highCare"
                                type="text"
                                defaultValue={initialState.highCare}
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>


                </Grid>





                {/* Error reporting */}

                <Grid item xs={12} sm={12}>

                    {errors.specialisedCriticalCare && (
                        <h4 style={{ color: "red" }}>
                            Please enter Specialised Critical Care
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

export default PatientStatus;