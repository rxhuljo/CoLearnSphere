import React, { useState } from "react";
import { loginUser } from "../api";
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

    const handleLogin = async () => {
        try {
            const response = await loginUser(email, password);
            alert(response.data.message);
            navigate('/home');
        } catch (error) {
            alert("Error in Lpgin Authentication!");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailcheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let valid = true;
        if(!emailcheck.test(email)){
            valid=false;
        }
        if(password == ""){
            
            valid = false;
        } 
        if(valid==true){
            console.log("working")
            handleLogin();
        }else{
            document.getElementById("error-text").style.color = "red";
        }
    };

    return (
        <div className="login-body">
        <div className="login-card">
            <h3>Login</h3>
            <form id={"login"} onSubmit={handleSubmit}>
                <p className="small-text" id="error-text">
                    {"Make sure you have entered the correct password,email"}
                </p>
                <br />
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
