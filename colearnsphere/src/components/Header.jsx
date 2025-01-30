import React from "react";
import Nav from "./Nav.jsx";
import { Link } from "react-router-dom";
import profile from "../assets/profileimg.png"
function Header(props){
    const isLoggedin = props.isLoggedIn;
    return(
        <nav className = 'header_nav'>
            <span>CoLearnSphere</span>
            <div className = "navbarlinks">{
                (!isLoggedin) ?
                <>
                <Nav name='home' link='/home'></Nav>
                <Nav name='about' link='#'></Nav>
                <Nav name='features' link='#'></Nav>
                </>
                : 
                <>
                <Nav name='home' link='#'></Nav>
                <Nav name='sessions' link='/sessions/explore' ></Nav>
                <Nav name='community' link='/community'></Nav>
                </>
            }
            </div>
            <div>{
            (!props.isLoggedin) ? 
                <>
                    <Link to='/profile'><div className="probg"><img src={profile} alt="" className = 'proimg'/></div></Link>
                </> :
                <><div className="signupbtn"><Link to='/login' className="signuptext">Sign Up</Link></div>
                    
                </>
             }
             </div>
        </nav>
    )
}

export default Header;