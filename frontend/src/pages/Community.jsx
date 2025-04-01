import React,{useEffect ,useState} from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { addCommunityPost , getCommunity } from "../api";
function Community(){
    let isLoggedIn = true;
    const [posts,setPost] = useState();
    const [newPost,setNewPost] = useState("");
    const addPost = ()=>{
        resetPost();
    }
    const resetPost = () =>{
        setNewPost("")
    }
    const fetchContent = () => {
        try{
           const community = getCommunity(); 
           setPost(community) 
           
        }
        catch(e){
            alert("Error");
        }
    }
    useEffect(() => {
        fetchContent()
    })
    return(
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <div className="gridlayout">
                <div className="left-column-post">
                    <textarea placeholder = "Start typing..."name="new-post"  value={newPost} id="new-post" onChange={(e) => setNewPost(e.target.value)}></textarea>
                    <button id="newcommpost" onClick={addPost}>New Post</button>
                </div>
                <div className="right-column-post">
                        {/*   
                            posts.toReversed().map((content,index) =>(
                                <PostCard key={index} content={content} user={username}/>
                            ))
                        */}
                        {
                            
                        }
                    <PostCard content="Build strong projects and gain internship experience for better placement opportunities." user="Emy Sara"/>
                    <PostCard content="Improve communication skills and practice coding regularly to ace technical interviews." user="Sophia Carter"/>
                    <PostCard content="Network with professionals on LinkedIn and attend career fairs for job opportunities." user="Daniel Thompson"/>
                    <PostCard content="Research companies, tailor resumes, and apply early for better placement chances." user="Olivia Harris"/>
                    <PostCard content="Develop problem-solving skills and participate in hackathons to stand out in placements." user="James Walker"/>
                    


                </div>
            </div>
        </>
    )
}

export default Community