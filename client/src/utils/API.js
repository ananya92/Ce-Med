import axios from "axios";

export default {

    // get all patients
    getPatients: function() {
        return axios.get("/api/ceMed/patients");
    },
    getCasesByPatientId: function(patientId) {
        return axios.get(`/api/ceMed/cases/${patientId}`);
    }
};