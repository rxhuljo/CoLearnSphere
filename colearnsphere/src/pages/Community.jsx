import React from "react";
import Header from "../components/Header.jsx";
function Community(){
    let isLoggedIn = true;
    return(
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <div className="container-sessions">
                <div className="fixed-column">
                    <li>explore</li>
                    <li>joined</li>
                    <li>calendar</li>
                    <li>resources</li>
                </div>
                <div className="scrollable-column">
                    
                </div>
            </div>
        </>
    )
}

export default Community