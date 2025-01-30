import React from "react";

function FeatureCard(props){
    return(
        <>  
            <div className="feature-card">
                <div className="feature-header">
                    {props.header}
                </div>
                <br />
                <div className="feature-body">
                    {props.body}
                </div>
            </div>
        </>
    )
}

export default FeatureCard