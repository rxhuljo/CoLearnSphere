import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useLocation } from "react-router-dom";
import CardSession from "../components/CardSession";
import { getJoinedSession } from "../api"; 

function Joined() {
    const [joinedSessions, setJoinedSessions] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userid");

    // Fetch joined sessions
    useEffect(() => {
        const fetchJoinedSessions = async () => {
            try {
                const response = await getJoinedSession(userId);
                setJoinedSessions(response.data.modules || []);
                
            } catch (error) {
                console.error("Error fetching joined sessions:", error);
                setJoinedSessions([]);
            }
        };
        fetchJoinedSessions();
    }, [userId]);

    return (
        <>
            <Header isLoggedIn={true} />
            <div className="gridlayout">
                <div className="left-column">
                    <ul>
                        <Link to={`/sessions/explore?userid=${userId}`} className="hamlinks">
                            <li>explore</li>
                            <div className="_line"></div>
                        </Link>
                        <Link to={`/sessions/joined?userid=${userId}`} className="hamlinks">
                            <li>joined</li>
                            <div className="_line"></div>
                        </Link>
                    </ul>
                </div>

                <div className="right-column">
                    {joinedSessions.length > 0 ? (
                        joinedSessions.map((session) => (
                            <CardSession 
                                key={session.id} 
                                btn="Open" 
                                name={session.host_name} 
                                nos={session.mod_joined} 
                                module={session.mod_name} 
                                desc={session.mod_desc} 
                                modid={session.id}
                            />
                        ))
                    ) : (
                        <p>No joined sessions available.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Joined;
