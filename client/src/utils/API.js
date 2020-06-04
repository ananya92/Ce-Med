import axios from "axios";

export default {

    // get all patients
    getPatients: function () {
        return axios.get("/api/patient");
    },

    register: newUser => {

        return axios
            .post('/api/user/sign', {
                username: newUser.username,
                password: newUser.password
            })
            .then(response => {
                console.log('Registered')
            })
    },

    apiLogin: function (userInfo) {
        return axios.post("/api/user/login", userInfo);
    },



};

