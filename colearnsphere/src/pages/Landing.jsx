import React from "react";
import Header from "../components/Header";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FeatureBody from "../components/FeatureBody.jsx";
import brain from "../assets/brain.png"
function Landing(){
    let isLoggedIn = false;
    const navigate = useNavigate();
    return(
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <div id="home">
                <div className="hero-home">
                    <div className="hero-text">
                    Welcome to Colearn Sphere <br />
                    where Education meets Collaboration 
                    <br />
                    </div>
                </div>
                <div className="about-section">
                    <div className="about-text">
                    “ At CoLearn Sphere, we believe <br /> that knowledge is best shared. <br /> Our peer-to-peer learning  platform connects <br />
                     passionate learners and skilled individuals “ 
                    </div>
                    <div>
                        <img src={brain} alt="brain-image" id="about-image"/>
                    </div>
                </div>
            <div className="_features">
                <div className="features-text">
                    Here are some of the features we have
                </div>
                <FeatureBody page="landing"></FeatureBody>
            </div>
            </div>
        </>
    )
}

export default Landing
