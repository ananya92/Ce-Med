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

function AlternativeContact(props) {
    const classes = useStyles();
    // react-hook-form
    const { register, handleSubmit, setValue, errors } = useForm();

    const [initialState, setInitialState] = useState(
        {
            id: 0,
            homeNumber: " ",
            mobileNumber: " ",
            name: " ",
            relationshipToPatient: " ",
            residentialAddressLine1: " ",
            residentialAddressLine2: " ",
            residentialCity: " ",
            residentialCode: " ",
            residentialSuburb: " ",
            surname: " ",
            workNumber: " "
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
            API.getAlternativeContact(caseInfo.CaseId).then(response => {
                console.log(JSON.stringify(response.data[0]));
                let data = response.data[0];

                let retrievedData = {
                    id: data.id,
                    surname: data.surname,
                    name: data.name,
                    relationshipToPatient: data.relationshipToPatient,
                    mobileNumber: data.mobileNumber,
                    homeNumber: data.homeNumber,
                    workNumber: data.workNumber,
                    residentialAddressLine1: data.residentialAddressLine1,
                    residentialAddressLine2: data.residentialAddressLine2,
                    residentialSuburb: data.residentialSuburb,
                    residentialCity: data.residentialCity,
                    residentialCode: data.residentialCode,
                }
                console.log(retrievedData);
                setTimeout(() => setInitialState(retrievedData));

                if (data != undefined || data != null) {
                    setValue([
                        { surname: data.surname },
                        { name: data.name },
                        { relationshipToPatient: data.relationshipToPatient },
                        { mobileNumber: data.mobileNumber },
                        { homeNumber: data.homeNumber },
                        { workNumber: data.workNumber },
                        { residentialAddressLine1: data.residentialAddressLine1 },
                        { residentialAddressLine2: data.residentialAddressLine2 },
                        { residentialSuburb: data.residentialSuburb },
                        { residentialCity: data.residentialCity },
                        { residentialCode: data.residentialCode },
                    ]);
                }
                else {
                    console.log("There is no saved data");
                }
            }).catch(error => {
                console.log("Error while getting Alternative contact data:", error);
            });
        }
    }, [])

    // saving or updating value on form submit
    const onSubmit = (res) => {
        var data = {
            ...res, CaseId: caseInfo.CaseId
        }

        console.log(data);

        API.storeAlternativeContact(data).then(response => {
            // console.log(response);
        }).catch(error => {
            console.log("Error while adding hospital information data:", error);
        });
    };


    return (

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
                            defaultValue={initialState.surname}
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
                            defaultValue={initialState.name}
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
                            inputRef={register({ required: true })}
                            defaultValue={initialState.relationshipToPatient}
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
                            inputRef={register({ required: true })}
                            defaultValue={initialState.mobileNumber}
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
                            defaultValue={initialState.workNumber}
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
                            defaultValue={initialState.homeNumber}
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
                            inputRef={register({ required: true })}
                            defaultValue={initialState.residentialAddressLine1}
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
                            defaultValue={initialState.residentialAddressLine2}
                            fullWidth
                        />
                    </Grid>
                    {/* Suburb */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="residentialSuburb"
                            variant="outlined"
                            label="Suburb"
                            name="residentialSuburb"
                            type="text"
                            inputRef={register({ required: true })}
                            defaultValue={initialState.residentialSuburb}
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
                            defaultValue={initialState.residentialCity}
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
                            inputRef={register({ required: true })}
                            defaultValue={initialState.residentialCode}
                            fullWidth
                        />
                    </Grid>









                </Grid>





                {/* Error reporting */}

                <Grid item xs={12} sm={12}>

                    {errors.surname && (
                        <h4 style={{ color: "red" }}>
                            Please enter Surname Information
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.relationshipToPatient && (
                        <h4 style={{ color: "red" }}>
                            Please enter relationship to the patient
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.mobileNumber && (
                        <h4 style={{ color: "red" }}>
                            Please enter mobile number.
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.residentialAddressLine1 && (
                        <h4 style={{ color: "red" }}>
                            Please enter Address Line 1
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.residentialSuburb && (
                        <h4 style={{ color: "red" }}>
                            Please enter Suburb
                        </h4>
                    )}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {errors.residentialCode && (
                        <h4 style={{ color: "red" }}>
                            Please enter PIN Code
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

// export default AlternativeContact;
export default AlternativeContact;