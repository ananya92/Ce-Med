import axios from "axios";

export default {

    // get all patients
    getPatients: function () {
        return axios.get("/api/ceMed/patients");
    },
    getCasesByPatientId: function (patientId) {
        return axios.get(`/api/ceMed/cases/${patientId}`);
    },
    /* store the respiratory system data. 
    Read the Respiratory system table first to check if a record in the Respiratory_System table already exists for the patient in today's date
    If it exists then update the data with PUT request otherwise create a new record with POST request
    */
    storeRespiratorySystemData: function (newRecordInfo) {
        return axios.post(`/api/ceMed/storeRespiratorySystemPatientData`, newRecordInfo);
    },

    getRespiratorySystemData: function () {

    },

    //saving Patient Information
    //1. save Hospital information
    storeHospitalInformationData: function (data) {
        return axios.post(`/api/patientDetails/hospitalInformation/storeHospitalInformationData`, data);
    },
    //2. get Hospital information
    getHospitalInformationData: function (CaseId) {
        // console.log(`/api/patientDetails/hospitalInformation/${CaseId}`);
        return axios.get(`/api/patientDetails/hospitalInformation/${CaseId}`);
    },

    //saving Alternate Contact Information
    //1. save Alternate Contact information
    storeAlternativeContact: function (data) {
        return axios.post(`/api/patientDetails/AlternativeContact/storeAlternativeContactData`, data);
    },
    //2. get Alternate Contact information
    getAlternativeContact: function (CaseId) {
        // console.log(`/api/patientDetails/AlternativeContact/${CaseId}`);
        return axios.get(`/api/patientDetails/AlternativeContact/${CaseId}`);
    },

    //saving Clinical Information
    //1. save Clinical information
    storeClinicalInformation: function (data) {
        return axios.post(`/api/patientDetails/ClinicalInformation/storeClinicalInformationData`, data);
    },
    //2. get Clinical Information 
    getClinicalInformation: function (CaseId) {
        // console.log(`/api/patientDetails/ClinicalInformation/${CaseId}`);
        return axios.get(`/api/patientDetails/ClinicalInformation/${CaseId}`);
    },

    //saving Emergency Contact Information
    //1. save Emergency Contact information
    storeEmergencyContact: function (data) {
        return axios.post(`/api/patientDetails/EmergencyContact/storeEmergencyContactData`, data);
    },
    //2. get Emergency Contact Information 
    getEmergencyContact: function (CaseId) {
        // console.log(`/api/patientDetails/EmergencyContact/${CaseId}`);
        return axios.get(`/api/patientDetails/EmergencyContact/${CaseId}`);
    },

    //saving Emergency Contact Information
    //1. save Emergency Contact information
    storeGurantorInformationData: function (data) {
        return axios.post(`/api/patientDetails/GurantorInformation/storeGurantorInformationData`, data);
    },
    //2. get Emergency Contact Information 
    getGurantorInformationData: function (CaseId) {
        // console.log(`/api/patientDetails/GurantorInformation/${CaseId}`);
        return axios.get(`/api/patientDetails/GurantorInformation/${CaseId}`);
    },

    //saving Hospital Visit Information
    //1. save Hospital Visit Information
    storeHospitalVisitInformation: function (data) {
        // console.log(data);
        return axios.post(`/api/patientDetails/HospitalVisitInformation/storeHospitalVisitInformationData`, data);
    },
    //2. get Hospital Visit Information
    getHospitalVisitInformation: function (CaseId) {
        // console.log(`/api/patientDetails/HospitalVisitInformation/${CaseId}`);
        return axios.get(`/api/patientDetails/HospitalVisitInformation/${CaseId}`);
    },

    //saving Medical Aid Information
    //1. save Medical Aid Information
    storeMedicalAidInformation: function (data) {
        // console.log(data);
        return axios.post(`/api/patientDetails/MedicalAidInformation/storeMedicalAidInformationData`, data);
    },
    //2. get Hospital Visit Information
    getMedicalAidInformation: function (CaseId) {
        // console.log(`/api/patientDetails/MedicalAidInformation/${CaseId}`);
        return axios.get(`/api/patientDetails/MedicalAidInformation/${CaseId}`);
    },

    //saving Patient Personal Information
    //1. save Patient Personal Information
    storePatientPersonalInformationData: function (data) {
        // console.log(data);
        return axios.post(`/api/patientDetails/PatientPersonalInformation/storePatientPersonalInformationData`, data);
    },
    //2. get Hospital Visit Information
    getPatientPersonalInformationData: function (CaseId) {
        // console.log(`/api/patientDetails/MedicalAidInformation/${CaseId}`);
        return axios.get(`/api/patientDetails/PatientPersonalInformation/${CaseId}`);
    },

    //saving Patient Declaration Information
    //1. save Patient Declaration Information
    storePatientDeclarationData: function (data) {
        // console.log(data);
        return axios.post(`/api/patientDetails/PatientDeclaration/storePatientDeclarationData`, data);
    },
    //2. get Hospital Visit Information
    getPatientDeclarationData: function (CaseId) {
        // console.log(`/api/patientDetails/PatientDeclaration/${CaseId}`);
        return axios.get(`/api/patientDetails/PatientDeclaration/${CaseId}`);
    },

    //******************BasicInfo***********************
    // uses getPatientPersonalInformationData to get patient's personal information


    //saving Patient Comorbidities Information
    //1. save Patient Comorbidities Information
    storeComorbiditiesData: function (data) {
        // console.log(data);
        return axios.post(`/api/basicInformation/Comorbidities/storeComorbiditiesData`, data);
    },
    //2. get Comorbidities Information
    getComorbiditiesData: function (CaseId) {
        // console.log(`/api/basicInformation/Comorbidities/${CaseId}`);
        return axios.get(`/api/basicInformation/Comorbidities/${CaseId}`);
    },


    //saving Patient Declaration Information
    //1. save Patient Declaration Information
    storeDiagnosisData: function (data) {
        // console.log(data);
        return axios.post(`/api/basicInformation/Diagnosis/storeDiagnosisData`, data);
    },
    //2. get Diagnosis Information
    getDiagnosisData: function (CaseId) {
        // console.log(`/api/patientDetails/Diagnosis/${CaseId}`);
        return axios.get(`/api/basicInformation/Diagnosis/${CaseId}`);
    },

    //saving Patient Status Information
    //1. save PatientStatus Information
    storePatientStatusData: function (data) {
        // console.log(data);
        return axios.post(`/api/basicInformation/PatientStatus/storePatientStatusData`, data);
    },
    //2. get Patient Status Information
    getPatientStatusData: function (CaseId) {
        // console.log(`/api/basicInformation/PatientStatus/${CaseId}`);
        return axios.get(`/api/basicInformation/PatientStatus/${CaseId}`);
    },

    //saving Vitals Information
    //1. save Vitals Information
    storeVitalsData: function (data) {
        // console.log(data);
        return axios.post(`/api/basicInformation/Vitals/storeVitalsData`, data);
    },
    //2. get Vitals Information
    getVitalsData: function (CaseId) {
        // console.log(`/api/basicInformation/Vitals/${CaseId}`);
        return axios.get(`/api/basicInformation/Vitals/${CaseId}`);
    },

};

// Function to convert the ISO time to local timezone
function dateToISOLikeButLocal(date) {
    const offsetMs = date.getTimezoneOffset() * 60 * 1000;
    const msLocal = date.getTime() - offsetMs;
    const dateLocal = new Date(msLocal);
    const iso = dateLocal.toISOString();
    const isoLocal = iso.slice(0, 19);
    return isoLocal;
}
