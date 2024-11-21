import axios from "axios";

const URL = "http://classwork.engr.oregonstate.edu:51555/api/patients"

const formatDate = (dateTime) => (new Date(dateTime).toISOString().split('T')[0])

export const getPatients = async () => {
    const response = await axios.get(URL);
    response.data.map(patient => ({
        ...patient,
        date_of_birth: formatDate(patient.date_of_birth),
        admitted_date: formatDate(patient.admitted_date),
        discharged_date: formatDate(patient.discharged_date)
    }))
    return response.data;
}

export const createPatient = async (newPatient) => {
    const response = await axios.post(URL, newPatient);
};

export const editPatient = async (patient) => {
    const response = await axios.put(URL + `/${patient.patientID}`, patient);
};

export const deletePatient = async (patientID) => {
    const response = await axios.delete(URL + `/${patientID}`);
};