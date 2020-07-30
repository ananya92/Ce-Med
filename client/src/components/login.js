import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import API from "../utils/API";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import history from "../utils/history";




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


function Login() {
    const classes = useStyles();
    // react-hook-form
    const { register, handleSubmit, setValue, errors } = useForm();


    // saving or updating value on form submit
    const onSubmit = (res) => {
        console.log(res);
        if(res.username === 'admin' && res.password ==='admin'){
            history.push('/home');
        }
    };


    return (

        <Container>
            <h4>Login</h4>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.root}
            // style={{ margin: "auto", textAlign: "justify", paddingTop: 10 }}
            >

                <Grid container spacing={1}>
                <Grid item xs={12} sm={4}></Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="User ID"
                            name="username"
                            inputRef={register}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}></Grid>
                    <Grid item xs={12} sm={4}></Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField                           
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            inputRef={register}
                        />
                    </Grid>                  
                    <Grid item xs={12} sm={4}></Grid>
                </Grid>





                {/* Error reporting */}

                <Grid item xs={12} sm={12}>

                    {errors.username && (
                        <h4 style={{ color: "red" }}>
                            Please enter user name
                        </h4>
                    )}
                </Grid>

                <Grid item xs={12} sm={12}>

                    {errors.password && (
                        <h4 style={{ color: "red" }}>
                            Please enter password
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
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={4} sm={4}></Grid>
                </Grid>
            </form>


        </Container >

    )
}

export default Login;