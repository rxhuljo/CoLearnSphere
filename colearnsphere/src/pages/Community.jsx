import React,{useState} from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
function Community(){
    let isLoggedIn = true;
    let username = "Rahul John"
    const [posts,setPost] = useState([]);
    const [newPost,setNewPost] = useState("");
    const addPost = ()=>{
        setPost([...posts,newPost])
        resetPost();
    }
    const resetPost = () =>{
        setNewPost("")
    }
    return(
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <div className="gridlayout">
                <div className="left-column-post">
                    <textarea placeholder = "Start typing..."name="new-post"  value={newPost} id="new-post" onChange={(e) => setNewPost(e.target.value)}></textarea>
                    <button id="newcommpost" onClick={addPost}>New Post</button>
                </div>
                <div className="right-column-post">
                    {
                        posts.map((content,index) =>(
                            <PostCard key="index" content={content} user={username}/>
                        ))
                    }


                </div>
            </div>
        </>
    )
}

export default Community