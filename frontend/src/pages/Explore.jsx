import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import CardSession from "../components/CardSession";
import { useLocation } from "react-router-dom";
function Explore(){
    let isLoggedIn = true;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userid");

    return(
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <div className="gridlayout">
                <div className="left-column">
                    <ul>
                        <Link to={`/sessions/explore?userid=${userId}`} className="hamlinks"><li>explore</li><div class="_line"></div></Link>
                        <Link to={`/sessions/joined?userid=${userId}`} className="hamlinks"><li>joined</li><div class="_line"></div></Link>
                        <Link to='/' className="hamlinks"><li>calendar</li><div class="_line"></div></Link>
                    </ul>
                </div>
                <div className="right-column">
                    <CardSession btn="Join" name = "Dr. Samuel Carter" nos={5} module="Data Structures" desc="Data structures organize and store data efficiently for processing, retrieval, and manipulation in computing."></CardSession>
                    <CardSession btn="Join" name = "Emily Watson" nos={67} module="Python Module 4 S5" desc="Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility."></CardSession>
                    <CardSession btn="Join" name = "Mr. Jonathan Reed" nos={45} module="Design Using Figma" desc="A collaborative design tool for creating UI/UX prototypes, wireframes, and interactive interfaces."></CardSession>
                    <CardSession btn="Join" name = "Olivia Bennett" nos={23} module="Stock Market Beginners" desc="Learn stock market basics, trading strategies, and risk management for beginners."></CardSession>
                    <CardSession btn="Join" name = "Sarah Thompson" nos={87} module="Electronics" desc="Study circuits, components, and electrical systems for various applications."></CardSession>
                    <CardSession btn="Join" name = "Dr. Alexander Hayes" nos={34} module="Artificial Intelligence" desc="Machines simulate human intelligence through learning, problem-solving, and automation."></CardSession>
                    <CardSession btn="Join" name = "James Peterson" nos={64} module="Networking" desc="Connect and manage computer systems for efficient data communication."></CardSession>
                    <CardSession btn="Join" name = "Mr. Daniel Foster" nos={34} module="React" desc="A JavaScript library for building fast and interactive user interfaces.k"></CardSession>
                    <CardSession btn="Join" name = "Sophia Collins" nos={23} module="Django" desc="A high-level Python framework for secure and scalable web applications."></CardSession>
                    <CardSession btn="Join" name = "Robert Mitchell" nos={87} module="Web Development" desc="Creating websites and applications using HTML, CSS, JavaScript, and frameworks."></CardSession>
                    <CardSession btn="Join" name = "Dr. Benjamin Clarke" nos={12} module="C Programming" desc="A powerful low-level language for system programming and software development."></CardSession>
                </div>
            </div>
        </>
    )
}

export default Explore