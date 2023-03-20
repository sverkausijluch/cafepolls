import React from 'react'

const CommentBlock = (props) => {
    return (
        <div className="comment-block">
            <img src={props.avatar} className="avatar"/>
            <h4>
                <span>{props.name}</span>
                <span className="date">{props.created_at}</span>
            </h4>
            <div className="text-zone">
                {props.text}
            </div>
        </div>
    )
}

export default CommentBlock