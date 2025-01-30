import React from "react";
import FeatureCard from "./FeatureCard";

function FeatureBody(props) {
    let body = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    let user = "Simon Blue";
    let features;
    if(props.page == "landing"){
        features = [
        { title: "Community Posts", desc: "Engage with a vibrant community of learners by posting questions, sharing insights, and seeking advice. Whether you need help with a tough concept or want recommendations on study materials, the community is here to support you!" },
        { title: "Group Collaboration", desc: "Work on projects, study as a team, and collaborate in real time. Create private or public groups, share resources, and brainstorm ideas efficiently, making learning more interactive and fun." },
        { title: "Join Sessions", desc: "Join a session to learn from others. Whether online or offline, these interactive sessions help you gain and share knowledge effectively." },
        { title: "Host Sessions", desc: "Host a session to teach a topic you're confident in. Whether online or offline, these interactive sessions help you gain and share knowledge effectively." },
        { title: "GPA Prediction", desc: "Our smart GPA prediction tool analyzes your performance and study habits to estimate your future grades. Get insights into areas for improvement and track your academic progress over time." }
    ];
    }else{
        features = [
            { title: "Mia Dawson", desc: "Start preparing early for interviews and internships. Build a strong foundation in core subjects, and stay updated on industry trends to be ahead in placement season." },
            { title: "Lucas Armstrong", desc: "Network with alumni and industry professionals. Attend career fairs, workshops, and seminars to expand your connections, which can provide valuable insights and job opportunities during placement." },
            { title: "Harper Brooks ", desc: "Focus on building a strong, diverse resume with relevant projects, internships, and certifications. Employers value practical experience alongside academic knowledge, so be sure to highlight both." },
            { title: "Leo Matthews", desc: "Practice mock interviews regularly to improve your communication skills. Focus on articulating your thoughts clearly and confidently to leave a strong impression during actual job interviews." },
            { title: "Chloe Griffin", desc: "Research the companies you're interested in. Understand their culture, values, and goals so you can tailor your applications and interviews to show how you'd be a great fit for them." }
        ];
        
        
    }

    return (
        <div className="features-frame">
            {features.map((feature, index) => (
                <FeatureCard 
                    key={index} 
                    header={feature.title} 
                    body={feature.desc} 
                />
            ))}
        </div>
    );
}

export default FeatureBody;
