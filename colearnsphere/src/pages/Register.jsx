import React, { useState } from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./loginstyle.css" 
function Register() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    const switchSinLog = () => {
        navigate("/login")
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        const emailcheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let valid = false;
        if(emailcheck.test(email)){
            valid=true
            console.log("Email valid");
        }else{
            window.alert("Invalid email")
        }
        if(valid==true){
            navigate("/home");
        }
    };

    return (
        <div className="login-body">
        <div className="login-card">
            <h3>Sign Up</h3>
            <form id={"login"} onSubmit={handleSubmit}>
                <p className="small-text">
                    {"Enter email and password to create account"}
                </p>
                <label className="small-text">Email</label>
                <br />
                <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label className="small-text">Password</label>
                <br />
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <button type="submit">Sign Up</button>
            </form>
            <div id="logsin">
                <button id="log" onClick={switchSinLog}>
                    Switch to Login
                </button>
            </div>
        </div>
        </div>
    );
}

export default Register;
