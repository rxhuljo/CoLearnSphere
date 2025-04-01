import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";
import "./loginstyle.css";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [college, setCollege] = useState("");

    const navigate = useNavigate();

    const switchToLogin = () => {
        navigate("/login");
    };

    const handleRegister = async () => {
        try {
            const response = await registerUser(username, password, email, college, phone);
            alert(response.data.message);
            console.log(response.data.id);
            navigate("/login");

        } catch (error) {
            alert("Error: " + (error.response?.data?.message || "Something went wrong"));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^[0-9]{10}$/;

        let isValid = true;

        if (!emailRegex.test(email)) {
            isValid = false;
        }

        if (!phoneRegex.test(phone)) {
            isValid = false;
        }

        if (!college || !username || !password) {
            isValid = false;
        }

        if (isValid) {
            handleRegister();
        } else {
            document.getElementById("error-text").style.color = "red";
        }
    };

    return (
        <div className="login-body">
            <div className="login-card">
                <h2>Sign Up</h2>
                <form id="login" onSubmit={handleSubmit}>
                    <p className="small-text" id="error-text">
                        Make sure you have entered details correctly
                    </p>
                    <label className="small-text">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                    <label className="small-text">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                    <label className="small-text">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    
                    <label className="small-text">College</label>
                    <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} />
                    
                    <label className="small-text">Phone</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

                    <button type="submit">Sign Up</button>
                </form>
                <button id="log" onClick={switchToLogin}>Switch to Login</button>
            </div>
        </div>
    );
}

export default Register;
