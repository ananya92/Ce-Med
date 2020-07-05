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


function PatientPersonalInformation(props) {
    const classes = useStyles();
    // react-hook-form
    const { register, handleSubmit, setValue, errors } = useForm();

    const [initialState, setInitialState] = useState(
        {
            identifierType: "_",
            identifierNumber: "_",
            surname: "_",
            name: "_",
            initials: "_",
            otherNames: "_",
            knownAs: "_",
            title: "_",
            gender: "_",
            dateOfBirth: moment(Date.now()).format("YYYY-MM-DD"),
            mobileNumber: "_",
            workNumber: "_",
            homeNumber: "_",
            methodOfContact: "_",
            receiveMarketing: "No",
            receivestatements: "No",
            emailAddress: "_",
            residentialAddressLine1: "_",
            residentialAddressLine2: "_",
            residentialSuburb: "_",
            residentialCity: "_",
            residentialCode: "_",
            postalAddressLine1: "_",
            postalAddressLine2: "_",
            postalCity: "_",
            postalSuburb: "_",
            postalCode: "_",
            maritalStatus: "_",
            dietaryPreference: "_",
            religion: "_",
            congregation: "_",
            minister: "_"
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
                //this part is needed if need to update initial values 
                // if (data != undefined || data != null) {
                // let retrievedData = {
                //     identifierType: data.identifierType,
                //     identifierNumber: data.identifierNumber,
                //     surname: data.surname,
                //     name: data.name,
                //     initials: data.initials,
                //     otherNames: data.otherNames,
                //     knownAs: data.knownAs,
                //     title: data.title,
                //     gender: data.gender,
                //     dateOfBirth: data.dateOfBirth,
                //     mobileNumber: data.mobileNumber,
                //     workNumber: data.workNumber,
                //     homeNumber: data.homeNumber,
                //     methodOfContact: data.methodOfContact,
                //     receiveMarketing: data.receiveMarketing,
                //     receivestatements: data.receivestatements,
                //     emailAddress: data.emailAddress,
                //     residentialAddressLine1: data.residentialAddressLine1,
                //     residentialAddressLine2: data.residentialAddressLine2,
                //     residentialSuburb: data.residentialSuburb,
                //     residentialCity: data.residentialCity,
                //     residentialCode: data.residentialCode,
                //     postalAddressLine1: data.postalAddressLine1,
                //     postalAddressLine2: data.postalAddressLine2,
                //     postalSuburb: data.postalSuburb,
                //     postalCity: data.postalCity,
                //     postalCode: data.postalCode,
                //     maritalStatus: data.maritalStatus,
                //     dietaryPreference: data.dietaryPreference,
                //     religion: data.religion,
                //     congregation: data.congregation,
                //     minister: data.minister,
                // }
                //     console.log(retrievedData);
                //     setTimeout(() => setInitialState(retrievedData));
                // } else {
                //     console.log("There is no saved data");
                // }
                if (data != undefined || data != null) {
                    setValue([
                        { identifierType: data.identifierType },
                        { identifierNumber: data.identifierNumber },
                        { surname: data.surname },
                        { name: data.name },
                        { initials: data.initials },
                        { otherNames: data.otherNames },
                        { knownAs: data.knownAs },
                        { title: data.title },
                        { gender: data.gender },
                        { dateOfBirth: moment(data.dateOfBirth).format("YYYY-MM-DD") },
                        { mobileNumber: data.mobileNumber },
                        { workNumber: data.workNumber },
                        { homeNumber: data.homeNumber },
                        { methodOfContact: data.methodOfContact },
                        { receiveMarketing: data.receiveMarketing },
                        { receivestatements: data.receivestatements },
                        { emailAddress: data.emailAddress },
                        { residentialAddressLine1: data.residentialAddressLine1 },
                        { residentialAddressLine2: data.residentialAddressLine2 },
                        { residentialSuburb: data.residentialSuburb },
                        { residentialCity: data.residentialCity },
                        { residentialCode: data.residentialCode },
                        { postalAddressLine1: data.postalAddressLine1 },
                        { postalAddressLine2: data.postalAddressLine2 },
                        { postalSuburb: data.postalSuburb },
                        { postalCity: data.postalCity },
                        { postalCode: data.postalCode },
                        { maritalStatus: data.maritalStatus },
                        { dietaryPreference: data.dietaryPreference },
                        { religion: data.religion },
                        { congregation: data.congregation },
                        { minister: data.minister },

                    ]);
                }
                else {
                    console.log("There is no saved Patient's Personal Information data");
                }
            }).catch(error => {
                console.log("Error while getting Patient's Personal Information data:", error);
            });
        }
    }, [])



    // saving or updating value on form submit
    const onSubmit = (res) => {
        var data = {
            ...res, CaseId: caseInfo.CaseId
        }

        console.log(data);

        API.storePatientPersonalInformationData(data).then(response => {
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
                    <Grid item xs={12} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="identifier-type"  >
                                Identifier Type
                                </InputLabel>
                            <Select
                                id="identifierType"
                                native
                                label="Identifier Type"
                                fullWidth
                                inputRef={register({ required: true })}
                                defaultValue={initialState.identifierType}
                                name="identifierType"
                                type="text"
                            // onChange={handleChange}
                            >
                                <option aria-label="None" value="Identifier Type" />
                                <option value="identificationNumber">Identification Number</option>
                                <option value="passportNo">Passport Number</option>
                                <option value="driverseLicence">Driver's licence</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            id="identifierNumber"
                            variant="outlined"
                            label="Identifier Number"
                            name="identifierNumber"
                            type="text"
                            inputRef={register({ required: true })}
                            defaultValue={initialState.identifierNumber}
                            fullWidth
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
                            inputRef={register({ required: true })}
                            defaultValue={initialState.surname}
                            fullWidth
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
                        />
                    </Grid>

                    <Grid item xs={12} sm={2}>
                        <TextField
                            margin="dense"
                            id="initials"
                            variant="outlined"
                            label="Initials"
                            name="initials"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.initials}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <TextField
                            margin="dense"
                            id="otherNames"
                            variant="outlined"
                            label="Other Names"
                            name="otherNames"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.otherNames}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            margin="dense"
                            id="knownAs"
                            variant="outlined"
                            label="Known As"
                            name="knownAs"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.knownAs}
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
                                defaultValue={initialState.title}
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

                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="gender"  >
                                Gender
                                </InputLabel>
                            <Select
                                id="gender"
                                native
                                label="gender"
                                fullWidth
                                inputRef={register}
                                defaultValue={initialState.gender}
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
                            inputRef={register({ required: true })}
                        />
                    </Grid>

                    <Grid item xs={6} sm={4}>
                        <TextField
                            margin="dense"
                            id="mobileNumber"
                            variant="outlined"
                            label="Mobile Number"
                            name="mobileNumber"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.mobileNumber}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
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
                    <Grid item xs={6} sm={4}>
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

                    <Grid item xs={6} sm={6}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="methodOfContact"  >
                                Preferred Method Of Contact
                                </InputLabel>
                            <Select
                                id="methodOfContact"
                                native
                                label="Preferred Method Of Contact"
                                fullWidth
                                inputRef={register}
                                defaultValue={initialState.methodOfContact}
                                name="methodOfContact"
                                type="text"
                            // onChange={handleChange}
                            >
                                <option aria-label="None" value="methodOfContact" />
                                <option value="mobile-phone">Mobile Phone</option>
                                <option value="work-phone">Work Phone</option>
                                <option value="home-phone">Home Phone</option>
                                <option value="email">Email</option>
                                <option value="by-post">By Post</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="receive-marketing"  >
                                Receive Marketing?
                                </InputLabel>
                            <Select
                                id="receive-marketing"
                                native
                                label="Receive Marketing?"
                                fullWidth
                                inputRef={register}
                                defaultValue={initialState.receiveMarketing}
                                name="receiveMarketing"
                                type="text"
                            // onChange={handleChange}
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <FormControl margin="dense" variant="outlined" fullWidth>
                            <InputLabel htmlFor="receive-statements"  >
                                Receive Statements?
                                </InputLabel>
                            <Select
                                id="receive-statements"
                                native
                                label="Receive Statements?"
                                fullWidth
                                inputRef={register}
                                defaultValue={initialState.receivestatements}
                                name="receivestatements"
                                type="text"
                            // onChange={handleChange}
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>

                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <TextField
                            margin="dense"
                            id="email-address"
                            variant="outlined"
                            label="Email Address"
                            name="emailAddress"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.emailAddress}
                            fullWidth
                        />
                    </Grid>


                    <Grid item xs={12} sm={12}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={6}>
                                {/* Residential Address */}
                                <h6>Residential Address</h6>
                                {/* Address Line 1 */}
                                <Grid item xs={12} sm={12}>
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
                                <Grid item xs={12} sm={12}>
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
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="residentialSuburb"
                                        variant="outlined"
                                        label="Suburb"
                                        name="residentialSuburb"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.residentialSuburb}
                                        fullWidth
                                    />
                                </Grid>
                                {/* City  */}
                                <Grid container >
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
                                            inputRef={register}
                                            defaultValue={initialState.residentialCode}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                {/* Postal Address */}
                                <h6>Postal Address</h6>
                                {/* Address Line 1 */}
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="postalAddressLine1"
                                        variant="outlined"
                                        label="Address Line 1"
                                        name="postalAddressLine1"
                                        type="text"
                                        inputRef={register({ required: true })}
                                        defaultValue={initialState.postalAddressLine1}
                                        fullWidth
                                    />
                                </Grid>
                                {/* Address Line 2 */}
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="postalAddressLine2"
                                        variant="outlined"
                                        label="Address Line 2"
                                        name="postalAddressLine2"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.postalAddressLine2}
                                        fullWidth
                                    />
                                </Grid>
                                {/* Suburb */}
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        margin="dense"
                                        id="postalSuburb"
                                        variant="outlined"
                                        label="Suburb"
                                        name="postalSuburb"
                                        type="text"
                                        inputRef={register}
                                        defaultValue={initialState.postalSuburb}
                                        fullWidth
                                    />
                                </Grid>
                                {/* City  */}
                                <Grid container >
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            margin="dense"
                                            id="postalCity"
                                            variant="outlined"
                                            label="City"
                                            name="postalCity"
                                            type="text"
                                            inputRef={register}
                                            defaultValue={initialState.postalCity}
                                            fullWidth
                                        />
                                    </Grid>
                                    {/* Code */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            margin="dense"
                                            id="postalCode"
                                            variant="outlined"
                                            label="Code"
                                            name="postalCode"
                                            type="text"
                                            inputRef={register}
                                            defaultValue={initialState.postalCode}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <h6>Other Details</h6>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            margin="dense"
                            id="maritalStatus"
                            variant="outlined"
                            label="Marital Status"
                            name="maritalStatus"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.maritalStatus}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={8}>
                        <TextField
                            margin="dense"
                            id="dietaryPreference"
                            variant="outlined"
                            label="Dietary Preference"
                            name="dietaryPreference"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.dietaryPreference}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={6} sm={4}>
                        <TextField
                            margin="dense"
                            id="religion"
                            variant="outlined"
                            label="Religion"
                            name="religion"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.religion}
                            fullWidth
                        />
                    </Grid>


                    <Grid item xs={6} sm={4}>
                        <TextField
                            margin="dense"
                            id="congregation"
                            variant="outlined"
                            label="Congregation"
                            name="congregation"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.congregation}
                            fullWidth
                        />
                    </Grid>


                    <Grid item xs={6} sm={4}>
                        <TextField
                            margin="dense"
                            id="minister"
                            variant="outlined"
                            label="Minister"
                            name="minister"
                            type="text"
                            inputRef={register}
                            defaultValue={initialState.minister}
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

export default PatientPersonalInformation;