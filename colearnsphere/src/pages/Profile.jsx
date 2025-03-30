import React from "react";
import Header from "../components/Header";
function Profile(){
    let isLoggedIn = true;
    return(
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <div className="hero-text">Profile Page</div>
        </>
    )
}

export default Profile