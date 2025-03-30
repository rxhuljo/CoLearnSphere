import React from "react";

function CardSession(props){
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
                Location : Ernakulam <br />
                Members : {props.nos}/100
            </div> 
            <div className="joinbtn">
                {props.btn}
            </div>
        </div>
    )
}

export default CardSession