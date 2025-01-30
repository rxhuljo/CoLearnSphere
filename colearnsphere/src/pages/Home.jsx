import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import FeatureBody from "../components/FeatureBody.jsx";
function Home(){
    let isLoggedIn = true;

    return(
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <div className="container">
                <div className="hero-home">Haven’t joined a session yet? ,<br />
                Find out something your interested in. <br />
                <Link to='/sessions/explore' id='explorelink'>
                <span class="_text">explore</span> 
                </Link>
                </div>
                <br />
                
            </div>
            <div className="advice">Want advice from seniors <br />
            who cracked their interviews?</div>
            <div className="advice-small">View our community tab for tips from seniors</div>
            <FeatureBody></FeatureBody>
            
        </>
    )
}

export default Home
