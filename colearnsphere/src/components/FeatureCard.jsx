import React from "react";

function FeatureCard(props){
    return(
        <>  
            <div className="features-card">
                <div className="features-header">
                    {props.header}
                </div>
                <div className="features-body">
                    {props.body}
                </div>
            </div>
        </>
    )
}

export default FeatureCard