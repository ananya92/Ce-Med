import axios from "axios";

export default {

    // get all patients
    getPatients: function () {
        return axios.get("/api/patient");
    },

    apiLogin: function (userInfo) {
        return axios.post("/api/user/login", userInfo);
    },

    apiRegister: function (userInfo) {
        return axios.post("/api/sign", { userInfo });
    },
};

