import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import CardSession from "../components/CardSession";
import HostSession from "../components/NewModule";
import { getModules } from "../api"; 

function Explore() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [sessions, setSessions] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userid");

    useEffect(() => {
        const getSessions = async () => {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const userId = urlParams.get("userid");
                const response = await getModules(userId); // Fetch sessions from backend
                setSessions(response.data.sessions || []);
            } catch (error) {
                console.error("Error fetching sessions:", error);
                setSessions([]);
            }
        };
        getSessions();
    }, []);

    return (
        <>
            <Header isLoggedIn={true} />
            <div className="gridlayout">
                <div className="left-column">
                    <ul>
                        <Link to={`/sessions/explore?userid=${userId}`} className="hamlinks">
                            <li>Explore</li><div className="_line"></div>
                        </Link>
                        <Link to={`/sessions/joined?userid=${userId}`} className="hamlinks">
                            <li>Joined</li><div className="_line"></div>
                        </Link>
                        <Link to='/' className="hamlinks">
                            <li>Calendar</li><div className="_line"></div>
                        </Link>
                    </ul>
                    <button className="create-session-btn" onClick={() => setIsOverlayOpen(true)}>
                        Create New Session
                    </button>
                </div>

                <div className="right-column">
                    {Array.isArray(sessions) && sessions.length > 0 ? (
                        sessions.map((session) => (
                            <CardSession 
                                key={session.id}
                                btn="Join"
                                name={session.host_name}
                                nos={session.mod_joined}
                                module={session.mod_name}
                                desc={session.mod_desc}
                                location={session.location}
                                modid={session.id}
                            />
                        ))
                    ) : (
                        <p>Loading sessions...</p>
                    )}
                </div>
            </div>

            {isOverlayOpen && (
                <div className="overlay-container">
                    <div className="overlay-bg" onClick={() => setIsOverlayOpen(false)}></div>
                    <HostSession onClose={() => setIsOverlayOpen(false)} />
                </div>
            )}
        </>
    );
}

export default Explore;
