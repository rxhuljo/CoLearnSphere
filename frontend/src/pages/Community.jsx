import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { useLocation } from "react-router-dom";
import { addCommunityPost, getCommunity } from "../api";

function Community() {
    let isLoggedIn = true;
    const [posts, setPosts] = useState([]); 
    const [newPost, setNewPost] = useState("");

    const fetchContent = async () => {
        try {
            const response = await getCommunity(); 
            setPosts(response.data); 
        } catch (e) {
            alert("Error fetching posts");
        }
    };

    useEffect(() => {
        fetchContent();
    }, []); 
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userid");
    const addPost = async () => {
        if (!newPost.trim()) return; 

        try {
            if (!userId) {
                alert("User ID is missing!");
                return;
            }

            console.log("Adding post:", newPost, "User ID:", userId);

            await addCommunityPost(userId, newPost); 
            setNewPost("");
            fetchContent(); 
        } catch (e) {
            console.error("Error in addPost:", e);
            alert("Error adding post");
        }
    };

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <div className="gridlayout">
                <div className="left-column-post">
                    <textarea
                        placeholder="Start typing..."
                        name="new-post"
                        value={newPost}
                        id="new-post"
                        onChange={(e) => setNewPost(e.target.value)}
                    />
                    <button id="newcommpost" onClick={addPost}>New Post</button>
                </div>
                <div className="right-column-post">
                    {posts.length > 0 ? (
                        posts.toReversed().map((content, index) => (
                            <PostCard key={index} content={content.content} user={content.name} />
                        ))
                    ) : (
                        <p>No posts available</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Community;
