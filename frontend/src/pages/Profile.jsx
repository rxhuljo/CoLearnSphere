import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { getUserDetails, getSemesterData, saveSemesterData } from "../api";
import { useLocation } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function Profile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [semesterData, setSemesterData] = useState(null);
    const [formOpen, setFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        current_sem: "",
        sem1: "", sem2: "", sem3: "", sem4: "",
        sem5: "", sem6: "", sem7: "", sem8: ""
    });

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userid");

    const fetchData = async () => {
        try {
            const userResponse = await getUserDetails(userId);
            setUserData(userResponse.data.user);

            const semResponse = await getSemesterData(userId);
            if (semResponse.success) {
                setSemesterData(semResponse.semesterData);
                setFormData(semResponse.semesterData);
            } else {
                setSemesterData(null);
            }
        } catch (err) {
            setError("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (!userId) {
            setError("User ID is missing");
            setLoading(false);
            return;
        }
        fetchData();
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let updatedFormData = { ...formData };
            let currentSem = parseInt(updatedFormData.current_sem, 10) || 0;
            
            for (let sem = currentSem; sem <= 8; sem++) {
                updatedFormData[`sem${sem}`] = 0;
            }
            console.log(formData)
            
            const response = await saveSemesterData(userId, updatedFormData);
            if (response.success) {
                /*setSemesterData(response.semesterData);*/
                fetchData();
                setFormOpen(false);
            }
        } catch (error) {
            setError("Failed to save semester data");
        }
    };

    if (loading) return <p>Loading user details...</p>;
    if (error) return <p>Error: {error}</p>;

    const semValues = semesterData ? [
        parseFloat(semesterData.sem1) || 0, parseFloat(semesterData.sem2) || 0, 
        parseFloat(semesterData.sem3) || 0, parseFloat(semesterData.sem4) || 0, 
        parseFloat(semesterData.sem5) || 0, parseFloat(semesterData.sem6) || 0, 
        parseFloat(semesterData.sem7) || 0, parseFloat(semesterData.sem8) || 0
    ] : [0, 0, 0, 0, 0, 0, 0, 0];

    return (
        <>
            <Header isLoggedIn={true} />
            <div className="profileframe">
                <div className="profilecard">
                    <b>Username</b>: {userData?.username || "N/A"}
                    <br /><b>Email</b>: {userData?.email || "N/A"}
                    <br /><b>Phone</b>: {userData?.phone || "N/A"}
                    <br /><b>College</b>: {userData?.College || "N/A"}
                </div>
                <br />
                <div className="semcard">
                    {semesterData && semesterData.sem1 ? (
                        <>
                            <h3>Semester Scores</h3>
                            <Line
                                data={{
                                    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"],
                                    datasets: [
                                        {
                                            label: "Your Scores",
                                            data: semValues,
                                            borderColor: "#D91D1D",
                                            fill: false
                                        },
                                        {
                                            label: "Average Score",
                                            data: [7.62, 8.52, 9.29, 9.46, 9.31, 8.23, 7.95, 8.53],
                                            borderColor: "rgb(27, 170, 132)",
                                            fill: false
                                        }
                                    ]
                                }}
                                options={{ responsive: true }}
                            />
                            <div>
    Current Semester : {semesterData.current_sem} <br />
    {Array.from({ length: semesterData.current_sem }, (_, i) => {
        const semNumber = i + 1;
        const semKey = `sem${semNumber}`;
        const sgpa = semesterData[semKey];

        return (
            <div key={semNumber}>
                {semNumber === semesterData.current_sem
                    ? `Predicted SGPA Semester ${semNumber} : ${sgpa || "N/A"}`
                    : `Semester ${semNumber} SGPA : ${sgpa || "N/A"}`}
                    <br />
            </div>
        );
    })}
                            </div>
                        </>
                    ) : (
                        <button onClick={() => setFormOpen(true)}>Enter Semester Details</button>
                    )}

                    {formOpen && (
                        <form onSubmit={handleSubmit}>
                            <label>Current Semester:
                                <input type="number" name="current_sem" value={formData.current_sem} onChange={handleInputChange} required />
                                <br />
                            </label>
                            {[...Array(8)].map((_, i) => (
                                <label key={i}>Sem {i + 1}:
                                    <input type="number" name={`sem${i + 1}`} value={formData[`sem${i + 1}`]} onChange={handleInputChange} step="0.1" />
                                    <br />
                                </label>
                                
                            ))}
                            <button type="submit">Save</button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}

export default Profile;