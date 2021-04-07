import React from "react";
import video from "../data/video.js"
import Comment from "./Comment"


function Comments(){
    const commentArr = video.comments.map(commentElem => {
        return (
            <Comment 
            key = {commentElem.id}
            user = {commentElem.user}
            comment = {commentElem.comment}
            />
        )
    })

    
    return(
        <div>
            <h2>{video.comments.length} Comments</h2>
            {commentArr}
        </div>
    )
}

export default Comments;