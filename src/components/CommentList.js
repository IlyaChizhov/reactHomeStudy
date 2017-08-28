import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'


class CommentList extends Component {

    render() {
        return (
            <div>
                {this.getComment()}
            </div>
        )
    }

    getComment(){

        const {isOpen, comments, toggleComment, isComment} = this.props

        if (!comments || !comments.length) {
            return <p>no comment yet</p>
        }
        else {
            return (<div>
                {!isOpen && isComment ? <ul>{comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)}</ul> : null}
                <button onClick={toggleComment}>{!isComment ? `Show ${comments.length} comments` : 'Hide comments'}</button>
            </div>)
        }
    }
}

export default toggleOpen(CommentList)