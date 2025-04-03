import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { getUserDetails } from "../api";
import { useLocation } from "react-router-dom";

function Profile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userid"); // Get userId from URL

    useEffect(() => {
        if (!userId) {
            setError("User ID is missing");
            setLoading(false);
            return;
        }

        const fetchUserDetails = async () => {
            try {
                const response = await getUserDetails(userId);
                setUserData(response.data.user);
            } catch (err) {
                setError("Failed to fetch user details");
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [userId]);

    if (loading) return <p>Loading user details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Header isLoggedIn={true} />
            <div className="profileframe">
                <div className="profilecard">
                    <b>Username</b>: {userData?.username || "N/A"}
                    <br /><b>Email</b>: {userData?.email || "N/A"}
                    <br /><b>Phone</b>: {userData?.phone || "N/A"}
                    {/* <br /><b>Age</b>: {userData?.age || "N/A"} */}
                    <br /><b>College</b>: {userData?.College || "N/A"}
                </div>
                <br />
                <div className="semcard">
                    
                </div>
            </div>
        </>
    );
}

export default Profile;
