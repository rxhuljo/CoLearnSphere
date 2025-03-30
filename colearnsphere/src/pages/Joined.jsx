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
                        <Link to='/' className="hamlinks"><li>resources</li><div class="_line"></div></Link>
                    </ul>
                </div>
                <div className="right-column">
                    <CardSession btn="Open"></CardSession>
                    <CardSession btn="Open"></CardSession>
                    <CardSession btn="Open"></CardSession>
                    <CardSession btn="Open"></CardSession>

                </div>
            </div>
        </>
    )
}

export default Joined