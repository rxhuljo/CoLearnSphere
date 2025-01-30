import React from "react";
import { Link } from "react-router-dom";
function Nav(props){
    const name = props.name;
    const link = props.link;

    return(
            <Link to={link} className="nav-link">{name}</Link>
    )
}

export default Nav