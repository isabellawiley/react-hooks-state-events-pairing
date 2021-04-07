import React from "react";
import {useState} from "react";

function VideoInfo({title, views, uploadDate, upvotes, downvotes}){
    const [upvote, setUpvote] = useState(upvotes)
    function upvoteClick(){
        setUpvote(upvote + 1)
    }

    const [downvote, setDownvote] = useState(downvotes)
    function downvoteClick(){
        setDownvote(downvote + 1)
    }

    

    return(
        <div>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {uploadDate}</p>
            <button onClick={upvoteClick}>{upvote}👆</button>
            <button onClick={downvoteClick}>{downvote}👇</button>
            <br/>
            <br/>
        </div>
    )
}

export default VideoInfo;

