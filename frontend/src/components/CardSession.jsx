import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { joinModule } from "../api";
function CardSession(props){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userid");
    const handleJoin = async () => {
        console.log("Attempting to join...");

        if (props.btn === "Join") {
            try {
                
                const modId = props.modid 
                const response = await joinModule(userId , modId)

                console.log(response.data);
                alert(response.data.message); 
            } catch (error) {
                console.error("Error joining session:", error);
                alert("Failed to join session.");
            }
        }
        else if(props.btn === "Joined") {
            alert("You have already joined this session")
        } 
        else if(props.btn === "Open"){
            alert("Redirecting to module page")
        }
    };
    return(
        <div className="sessioncard">
            <div className="session-header">
                {props.module}
            </div>
            <div className="session-desc">
                {props.desc}
            </div>
            <div className="session-details">
                <br />Hosted By : {props.name} <br />
                Location : {props.location} <br />
                Members : {props.nos}/100
            </div> 
            <button className="joinbtn" onClick={handleJoin}>
                {props.btn}
            </button>
        </div>
    )
}

export default CardSession