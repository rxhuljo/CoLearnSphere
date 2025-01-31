import React from "react";
import Header from "../components/Header";
function Profile(){
    let isLoggedIn = true;
    return(
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <div className="profileframe">
                <div className="profilecard">
                    <b>Username</b> : User1123ab42
                    <br /><b>Email</b> : u220340@rajagiri.edu.in
                    <br /><b>Phone</b> : 96745848436
                    <br /><b>Age</b> : 21
                    <br /><b>College</b> : Rajagiri School Of Engineering and Technology
                </div>
            </div>
        </>
    )
}

export default Profile