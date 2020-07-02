import axios from "axios";

export default {

    // get all patients
    getPatients: function() {
        return axios.get("/api/ceMed/patients");
    },
    getCasesByPatientId: function(patientId) {
        return axios.get(`/api/ceMed/cases/${patientId}`);
    },
    /* store the respiratory system data. 
    Read the Respiratory system table first to check if a record in the Respiratory_System table already exists for the patient in today's date
    If it exists then update the data with PUT request otherwise create a new record with POST request
    */
    storeRespiratorySystemData: function(newRecordInfo) {
        return axios.post(`/api/ceMed/storeRespiratorySystemPatientData`, newRecordInfo);
    },

    getRespiratorySystemData: function() {
        
    },

    //saving Patient Information
    //1. save Hospital information
    storeHospitalInformationData: function(data) {
        return axios.post(`/api/patientDetails/hospitalInformation/storeHospitalInformationData`, data);
    },
    //2. get Hospital information
    getHospitalInformationData: function(CaseId) {
        // console.log(`/api/patientDetails/hospitalInformation/${CaseId}`);
        return axios.get(`/api/patientDetails/hospitalInformation/${CaseId}`);
    },

    //saving Alternate Contact Information
    //1. save Alternate Contact information
    storeAlternativeContact: function(data) {
        return axios.post(`/api/patientDetails/AlternativeContact/storeAlternativeContactData`, data);
    },
    //2. get Alternate Contact information
    getAlternativeContact: function(CaseId) {
        // console.log(`/api/patientDetails/AlternativeContact/${CaseId}`);
        return axios.get(`/api/patientDetails/AlternativeContact/${CaseId}`);
    },

};

// Function to convert the ISO time to local timezone
function dateToISOLikeButLocal(date) {
    const offsetMs = date.getTimezoneOffset() * 60 * 1000;
    const msLocal =  date.getTime() - offsetMs;
    const dateLocal = new Date(msLocal);
    const iso = dateLocal.toISOString();
    const isoLocal = iso.slice(0, 19);
    return isoLocal;
}
