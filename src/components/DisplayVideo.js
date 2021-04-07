import React from "react"
import VideoInfo from "./VideoInfo"
import Comments from "./Comments"
import video from "../data/video.js"

function DisplayVideo({title, source}){

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
            <Comments />
        </div>
       
    )  
}

export default DisplayVideo;