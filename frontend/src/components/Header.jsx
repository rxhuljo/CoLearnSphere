import React from "react";
import Nav from "./Nav.jsx";
import { Link } from "react-router-dom";
import profile from "../assets/profileimg.png"
import logo from "../assets/logo.png"
import { useLocation } from "react-router-dom";
function Header(props){
    const isLoggedin = props.isLoggedIn;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userid");

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
                    <Nav name="home" link={`/home?userid=${userId}`} />
                    <Nav name='sessions' link={`/sessions/explore?userid=${userId}`} ></Nav>
                    <Nav name='community' link={`/community?userid=${userId}`}></Nav>
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