import React from "react"
import VideoInfo from "./VideoInfo"
import Comments from "./Comments"
import video from "../data/video.js"
import {useState} from "react";

function DisplayVideo({title, source}){
    const [hideComment, setHideComment] = useState(false)
    function hideCommentClick(){
        setHideComment(!hideComment)
        // if(hideComment)
        // {<Comments/>}: null
    }


    return (
        <div>
            <iframe
            width="919"
            height="525"
            src={source}
            frameborder="0"
            allowfullscreen
            title={title}
            />
            <VideoInfo
            title= {video.title}
            views={video.views}
            uploadDate={video.createdAt}
            upvotes={video.upvotes}
            downvotes={video.downvotes}
             />
            <button onClick={hideCommentClick}>Hide Comments</button>
            {hideComment ? <Comments/> : null}
        </div>
       
    )  
}

export default DisplayVideo;