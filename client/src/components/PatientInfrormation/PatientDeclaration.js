import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import API from "../../utils/API";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import moment from "moment";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

    const [state, setState] = React.useState({
        isAgree: false,
    });

    const [initialState, setInitialState] = useState(
        {
            name: "_",
            isAgree: false,
            // dateOfBirth: moment(Date.now()).format("YYYY-MM-DD"),

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
            API.getPatientDeclarationData(caseInfo.CaseId).then(response => {
                // console.log(JSON.stringify(response.data[0]));
                // console.log(response.data[0]);
                let data = response.data[0];
                //    this part is needed if need to update initial values 
                // if (data != undefined || data != null) {
                //     let retrievedData = {
                //         name: data.name,
                //         isAgree: data.isAgree,
                //         dateOfBirth: data.dateOfBirth,
                //     }
                //     console.log(retrievedData);
                //     setTimeout(() => setInitialState(retrievedData));
                // } else {
                //     console.log("There is no saved data");
                // }
                if (data != undefined || data != null) {
                    setValue([
                        { name: data.name },
                        { isAgree: true },
                        { dateOfBirth: moment(data.dateOfBirth).format("YYYY-MM-DD") },
                    ]);
                    if (data.isAgree === "1") {
                        // console.log("data.isAgree === 1");
                        setState({isAgree: true});
                        setValue([
                            { name: data.name },
                            { isAgree: true },
                            { dateOfBirth: moment(data.dateOfBirth).format("YYYY-MM-DD") },
                        ])
                    }
                }
                else {
                    console.log("There is no saved Medical Aid Information data");
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

        console.log(data);

        API.storePatientDeclarationData(data).then(response => {
            // console.log(response);
        }).catch(error => {
            console.log("Error while adding hospital information data:", error);
        });
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
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
                        </ul>
                    </Grid>

                    <Grid item xs={12} sm={12}>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.isAgree}
                                    onChange={handleChange}
                                    name="isAgree"
                                    color="primary"
                                    inputRef={register({ required: true })}
                                    defaultValue={initialState.isAgree}
                                />
                            }
                            label="I hereby declare that the information I have provided is true and correct and agree to the terms and conditions as set out above."
                        />
                    </Grid>
                    {state.isAgree ?
                        <React.Fragment>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    variant="outlined"
                                    label="Name"
                                    name="name"
                                    type="text"
                                    inputRef={register({ required: true })}
                                    defaultValue={initialState.name}
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
                                    defaultValue={initialState.dateOfBirth}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    inputRef={register({ required: true })}
                                />
                            </Grid>
                        </React.Fragment>
                        : null}
                </Grid>



                {/* Error reporting */}

                <Grid item xs={12} sm={12}>
                    {errors.name && (
                        <h4 style={{ color: "red" }}>
                            Please enter Name
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.isAgree && (
                        <h4 style={{ color: "red" }}>
                            Please tick terms and conditions
                        </h4>
                    )}
                </Grid>

                <Grid item xs={12} sm={12}>
                    {errors.dateOfBirth && (
                        <h4 style={{ color: "red" }}>
                            Please enter date of birth
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


export default PatientDeclaration;