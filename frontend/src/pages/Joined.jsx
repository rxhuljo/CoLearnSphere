import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import CardSession from "../components/CardSession";
function Joined(){
    let isLoggedIn = true;
    return(
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <div className="gridlayout">
                <div className="left-column">
                    <ul>
                        <Link to='/sessions/explore' className="hamlinks"><li>explore</li><div class="_line"></div></Link>
                        <Link to='/sessions/joined' className="hamlinks"><li>joined</li><div class="_line"></div></Link>
                        <Link to='/' className="hamlinks"><li>calendar</li><div class="_line"></div></Link>
                    </ul>
                </div>
                <div className="right-column">
                    <CardSession btn="Open" name = "James Peterson" nos={64} module="Networking" desc="Connect and manage computer systems for efficient data communication."></CardSession>
                    <CardSession btn="Open" name = "Mr. Daniel Foster" nos={34} module="React" desc="A JavaScript library for building fast and interactive user interfaces.k"></CardSession>
                    <CardSession btn="Open" name = "Sophia Collins" nos={23} module="Django" desc="A high-level Python framework for secure and scalable web applications."></CardSession>
                    <CardSession btn="Open" name = "Robert Mitchell" nos={87} module="Web Development" desc="Creating websites and applications using HTML, CSS, JavaScript, and frameworks."></CardSession>
                    <CardSession btn="Open" name = "Dr. Benjamin Clarke" nos={12} module="C Programming" desc="A powerful low-level language for system programming and software development."></CardSession>

                </div>
            </div>
        </>
    )
}

export default Joined