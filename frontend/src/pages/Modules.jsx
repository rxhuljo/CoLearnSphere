import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMessages, sendMessage, getResources, addResource } from "../api";
const CollaborationRoom = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userid");
  const moduleId = searchParams.get("moduleid");
  const [messages, setMessages] = useState([]);
  const [newFileName, setNewFileName] = useState("");
  const [message, setMessage] = useState("");
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState("");
  const videoCallUrl = `https://meet.jit.si/${moduleId}`;

  // Fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(moduleId);
        setMessages(data || []);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [moduleId]);

  // Send message
  const handleSendMessage = async () => {
    if (!message) return;
    try {
      await sendMessage({ user_id: userId, module_id: moduleId, text: message });
      setMessages([...messages, { user_id: userId, text: message }]);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const fetchResources = async () => {
    try {
      const { data } = await getResources(moduleId);
      setResources(data || []);
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };
  // Fetch resources
  useEffect(() => {
    fetchResources();
  }, [moduleId]);

  // Add new resource
  const handleAddResource = async () => {
    if (!newResource) return;
    try {
      await addResource({ user_id: userId, module_id: moduleId, url: newResource ,file_name :newFileName});
      /*setResources([...resources, { user_id: userId, url: newResource }]);*/
      getResources();
      setNewResource("");
      setNewFileName("")
    } catch (error) {
      console.error("Error adding resource:", error);
    }
  };

  return (
    <>
        <div className="left-column">
            <div>
            <h2>Video Call</h2>
            <a href={videoCallUrl} target="_blank" rel="noopener noreferrer"><button className="joinvideo">Join Video Call</button></a>
            </div>
            <div>
            <h2>Resources</h2>
            <div className="resource">
              <input className="resourcetext" value={newResource} onChange={(e) => setNewResource(e.target.value)} placeholder="Add resource URL..." />
              <input 
  className="resourcetext" 
  value={newFileName} 
  onChange={(e) => setNewFileName(e.target.value)} 
  placeholder="Add File Name..." 
/>
              <button onClick={handleAddResource} className="resourcebtn">Add Resource</button>
            </div>
            <br />
            <h2>Available Resources</h2>
            <ul className="resourcelist" id="test1">
              {resources.map((res, index) => (
                <li key={index}>
                  <a href={res.url} target="_blank" rel="noopener noreferrer">
                    {res.file_name} (by {res.username})
                  </a>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
        <div className="right-column">
            <div className="chatcard">
                <h2 className="chatheading">Chatroom</h2>
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className="messagebody">
                            <strong>{msg.username}:</strong> {msg.text}
                        </div>
                    ))}
                </div>
                <div className="typer">
                  <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
                  <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
          </div>          
    </>
  );
};

export default CollaborationRoom;
