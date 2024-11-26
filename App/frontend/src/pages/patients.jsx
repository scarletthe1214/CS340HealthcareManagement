import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPatients, deletePatient } from "../client/apiPatient";
import { useLocation } from 'react-router-dom';
import './style.css';

function Patients() {
    const [patients, setPatients] = useState([]);
    const location = useLocation();

    // call get patients API to update patients' state
    useEffect(() => {
        setTimeout(() => getPatients().then(response => {
            setPatients(response);
        }), 500);
    }, [location])

    const handleDeleteClick = (patientID) => {
        setPatients(patients.filter(patient => patient.patientID !== patientID));
        deletePatient(patientID)
    };

    return (
        <section className="common-container">
            <header>
                <h1>Patient Records</h1>
                <nav>
                    <a href="/">Home</a> | <a href="/physicians">Physicians</a> |{" "}
                    <a href="/patients">Patients</a> | <a href="/diagnoses">Diagnoses</a> |{" "}
                    <a href="/tests">Tests</a>
                </nav>
            </header>
            <div className="common-actions">
                {/* Link to AddPatientForm page */}
                <Link to="/add-patient">
                    <button>Add Patient</button>
                </Link>
            </div>

            <table className="common-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Admitted Date</th>
                        <th>Discharged Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.patientID}>
                            <td>{patient.patient_name}</td>
                            <td>{patient.date_of_birth}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.admitted_date}</td>
                            <td>{patient.discharged_date}</td>
                            <td>
                                {/* Link to EditPatientForm page for a specific patient */}
                                <Link to={`/edit-patient/${patient.patientID}`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => handleDeleteClick(patient.patientID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="trademark">SpeedyMD™</div>
        </section>
    );
}

export default Patients;
