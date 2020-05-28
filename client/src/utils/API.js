import axios from "axios";

export default {

    // get all patients
    getPatients: function() {
        return axios.get("/api/patient");
    }
};