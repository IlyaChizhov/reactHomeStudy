/**
 * Created by ilyaChizhov on 17.08.17.
 */

import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'



class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    state = {
        index: 0
    }


    render() {

        const {article, isOpen, toggleOpen} = this.props

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={() => this.setState({index: this.state.index + 1})}>Update component</button>
                <button onClick={toggleOpen}>
                    {
                        isOpen ? 'CLOSE' : 'OPEN'
                    }
                </button>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={500}
                >
                    {this.getBody()}
                </CSSTransitionGroup>


            </div>
        )
    }

    getBody() {
        const {article , isOpen} = this.props
        if (!isOpen) return null
        return <section>
            {article.text}
                <CommentList comments={article.comments} ref = {this.setRefs} key = {this.state.index}/>
            </section>
    }

    setRefs = ref => {
        console.log(ref)
    }

}

export default Article
