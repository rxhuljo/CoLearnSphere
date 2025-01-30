import React from "react";
import FeatureCard from "./FeatureCard";

function FeatureBody(props) {
    let body = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    let user = "Simon Blue";
    
    let features = [
        { title: "Community Posts", desc: "Engage with a vibrant community of learners by posting questions, sharing insights, and seeking advice. Whether you need help with a tough concept or want recommendations on study materials, the community is here to support you!" },
        { title: "Group Collaboration", desc: "Work on projects, study as a team, and collaborate in real time. Create private or public groups, share resources, and brainstorm ideas efficiently, making learning more interactive and fun." },
        { title: "Join Sessions", desc: "Join a session to learn from others. Whether online or offline, these interactive sessions help you gain and share knowledge effectively." },
        { title: "Host Sessions", desc: "Host a session to teach a topic you're confident in. Whether online or offline, these interactive sessions help you gain and share knowledge effectively." },
        { title: "GPA Prediction", desc: "Our smart GPA prediction tool analyzes your performance and study habits to estimate your future grades. Get insights into areas for improvement and track your academic progress over time." }
    ];

    return (
        <div className="features-frame">
            {features.map((feature, index) => (
                <FeatureCard 
                    key={index} 
                    header={props.page === "home" ? user : feature.title} 
                    body={props.page === "home" ? body : feature.desc} 
                />
            ))}
        </div>
    );
}

export default FeatureBody;
