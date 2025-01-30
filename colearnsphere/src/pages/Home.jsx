import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import FeatureBody from "../components/FeatureBody.jsx";
function Home(){
    let isLoggedIn = true;

    return(
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <div id="home">
                <div className="hero-home">
                    <div className="hero-text">
                    Haven’t joined a session yet? , <br />
                    Find out something your interested in. 
                    <br />
                    <div className="calltoaction">Check out our <Link to='/sessions/explore' className="callaction">explore</Link> section</div>
                    </div>
                </div>
            <div className="_features">
                <div className="features-text">
                    Want advice from seniors <br />
                    who cracked their interviews?
                </div>
                <div className="features-desc">
                    View our community tab for tips from seniors
                </div>
                <FeatureBody page="home"></FeatureBody>
            </div>
            </div>
        </>
    )
}

export default Home
