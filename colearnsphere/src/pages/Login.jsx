import React, { useState } from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./loginstyle.css" 
function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    const switchSinLog = () => {
        navigate("/register")
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
            <h3>Login</h3>
            <form id={"login"} onSubmit={handleSubmit}>
                <p className="small-text">
                    {"Enter email and password to login"}
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
                {isLogin && (
                    <a href="google.com">
                        <div className="forgotpass small-text">Did you forget your password?</div>
                    </a>
                )}
                <br />
                <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
            </form>
            <div id="logsin">
                <button id="log" onClick={switchSinLog}>
                    Switch to Sign Up
                </button>
            </div>
        </div>
        </div>
    );
}

export default Login;
