/**
 * Created by ilyaChizhov on 17.08.17.
 */

import React, {Component} from 'react'
import CommentList from './CommentList'

/*export default function Article(props) {
 const {article} = props
 console.log(props)
 return (
 <div>
 <h3>{article.title}</h3>
 <section>{article.text}</section>
 </div>
 )
 }*/

export  default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            isComment: false
        }
    }

    render() {

        const {article} = this.props
        const {isOpen} = this.state
        const {isComment} = this.state

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toogleOpen}>
                    {
                        isOpen ? 'CLOSE' : 'OPEN'
                    }
                </button>

                {this.getBody()}

                {isComment ? <CommentList comments = {article.comments}/> : null}

            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return <section>{article.text}
                    <button onClick={this.toggleComments}>comments</button>
                </section>
    }

    toggleComments = () => {
        this.setState({
            isComment: !this.state.isComment
        })
    }

    toogleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
