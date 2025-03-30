import React from "react";

function CardSession(props){
    return(
        <div className="sessioncard">
            <div className="session-header">
                DataStructures
            </div>
            <div className="session-desc">
                this is a class on datastructures.we will go through the core concepts of datastructures
            </div>
            <div className="session-details">
                <br />Hosted By : Simon Blue <br />
                Location : Ernakulam <br />
                Members : 25/30
            </div> 
            <div className="joinbtn">
                {props.btn}
            </div>
        </div>
    )
}

export default CardSession