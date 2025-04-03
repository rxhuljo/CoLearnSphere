import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/loginstyle.css";
import { addModule } from "../api";
function HostSession({ onClose }) {
    const [sessionName, setSessionName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        const userid = urlParams.get("userid");

        if (!sessionName || !location || !description) {
            document.getElementById("error-text").style.color = "red";
            return;
        }

        try {
            const response = await addModule(userid, sessionName, location, description);
            const data = await response.data;
            alert(data.message || "New session created!");
            onClose(); // Close the overlay after submitting
        } catch (error) {
            console.error("Error creating session:", error);
            alert("Failed to create session.");
        }
    };

    return (
        <div className="hostsession-popup">
            <button className="close-button" onClick={onClose}>X</button>
            <h3>Host a New Session</h3>
            <form onSubmit={handleSubmit}>
                <p className="small-text" id="error-text">
                    {"Please fill all fields to create a session."}
                </p>
                <br />
                <label className="small-text">Session Name</label>
                <br />
                <input 
                    type="text" 
                    value={sessionName}
                    onChange={(e) => setSessionName(e.target.value)}
                />
                <br />
                <label className="small-text">Location</label>
                <br />
                <input 
                    type="text" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <br />
                <label className="small-text">Description</label>
                <br />
                <textarea
                    className="descri"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <button type="submit">Create Session</button>
            </form>
        </div>
    );
}

export default HostSession;
