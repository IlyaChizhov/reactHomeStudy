import React from 'react'

export default function Comment(props) {
    let comment = props.comment

    return (
        <div>
            <div>{comment.user}</div>
            <div>{comment.text}</div>
        </div>
    )
}