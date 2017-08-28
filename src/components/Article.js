/**
 * Created by ilyaChizhov on 17.08.17.
 */

import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }


    render() {

        const {article, isOpen, toggleOpen} = this.props

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {
                        isOpen ? 'CLOSE' : 'OPEN'
                    }
                </button>

                {this.getBody()}


            </div>
        )
    }

    getBody() {
        const {article , isOpen} = this.props
        if (!isOpen) return null
        return <section>{article.text}
            <CommentList comments={article.comments}/>
        </section>
    }

}

export default Article
