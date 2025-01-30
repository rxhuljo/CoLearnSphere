import React from "react";
import Nav from "./Nav.jsx";
import { Link } from "react-router-dom";
import profile from "../assets/profileimg.png"
import logo from "../assets/logo.png"
function Header(props){
    const isLoggedin = props.isLoggedIn;
    return(
        <nav className = 'header_nav'>
            <div className="left">
            <div className="dk"><img src={logo} id="logo" /></div>
            <div className="mob">C</div>
            </div>
                <div className = "navbarlinks">{
                    (!isLoggedin) ?
                    <>
                    
                    </>
                    : 
                    <>
                    <Nav name='home' link='/'></Nav>
                    <Nav name='sessions' link='/sessions/explore' ></Nav>
                    <Nav name='community' link='/community'></Nav>
                    </>
                    }
                </div>
            <div className="right">{
            (isLoggedin) ? 
                <>
                    <div ><Link to='/profile'><div className="probg"><img src={profile} alt="" className = 'proimg'/></div></Link></div>
                </> :
                <><Link to='/register' className="signuptext"><div className="signupbtn">Sign Up</div></Link>
                    
                </>
             }
             </div>
        </nav>
    )
}

export default Header;