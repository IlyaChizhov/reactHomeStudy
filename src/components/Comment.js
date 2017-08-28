import React from 'react'
import propTypes from 'prop-types'

function Comment(props) {

    const {comment} = props

    return (
            <div>
                <div>{comment.user}</div>
                <div>{comment.text}</div>
            </div>
    )
}

Comment.propTypes = {
    comment: propTypes.shape({
        text: propTypes.string.isRequired
    })
}

export default Comment