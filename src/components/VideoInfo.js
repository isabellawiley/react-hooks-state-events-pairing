import React from "react";

function VideoInfo({title, views, uploadDate, upvotes, downvotes}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {uploadDate}</p>
            <button>{upvotes}👆</button>
            <button>{downvotes}👇</button>
            <br></br>
            <button>Hide Comments</button>
        </div>
    )
}

export default VideoInfo;