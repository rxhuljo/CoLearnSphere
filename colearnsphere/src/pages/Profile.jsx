import React from "react";
import Header from "../components/Header";
function Profile(){
    let isLoggedIn = true;
    return(
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <div className="profileframe">
                <div className="profilecard">
                    Username : User1123ab42
                    <br />Email : u220340@rajagiri.edu.in
                    <br />Phone : 96745848436
                    <br />Age : 21
                    <br />College : Rajagiri School Of Engineering and Technology
                </div>
            </div>
        </>
    )
}

export default Profile