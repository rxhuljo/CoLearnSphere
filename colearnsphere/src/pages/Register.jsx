import React, { useState } from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./loginstyle.css" 
function Register() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [Username,setUsername] = useState("");
    const [College,setCollege] = useState("");
    const navigate=useNavigate();
    const switchSinLog = () => {
        navigate("/login")
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        const emailcheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let valid = true;
        if(emailcheck.test(email)){
            console.log("Email valid");
        }else{
            valid = false;
        }
        const phonecheck = /^[0-9]{10}$/;
        if(!phonecheck.test(phone)){
           valid = false; 
        }
        if(College.trim == "" || Username.trim == "" || password.trim == ""){
            valid = false;
        } 
        if(valid==true){
            navigate("/home");
        }else{
            document.getElementById("error-text").style.color = "red"
        }

    };

    return (
        <div className="login-body">
        <div className="login-card">
            <h2>Sign Up</h2>
            <form id={"login"} onSubmit={handleSubmit}>
                <p className="small-text" id="error-text">
                    Make sure you have entered details correctly
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
                <label className="small-text">Username</label>
                <br />
                <input 
                    type="text" 
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label className="small-text">College</label>

                <br />
                <input 
                    type="text" 
                    value={College}
                    onChange={(e) => setCollege(e.target.value)}
                />
                <br />
                <label className="small-text">Phone</label>
                <br />
                <input 
                    type="text" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
