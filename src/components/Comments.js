import React from "react";
import video from "../data/video.js"
import {useState} from "react";


function Comments(){
    const commentArr = video.comments.map(commentElem => {
        return (
            <div>
                <h3>{commentElem.user}</h3>
                <p>{commentElem.comment}</p>
            </div>
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