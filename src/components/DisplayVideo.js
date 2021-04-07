import React from "react"
import video from "../data/video.js";
import Comments from "./Comments"
import VideoInfo from "./VideoInfo"

function DisplayVideo(){
    const commentArray = video.comments

    return (
        <div>
            <iframe
            width="919"
            height="525"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameborder="0"
            allowfullscreen
            title="Thinking in React"
            />
            <VideoInfo />
            <Comments />
        </div>
       
    )
    
}

export default DisplayVideo;