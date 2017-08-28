import React, {Component} from 'react'

export  default (OriginalComponent) => class WrappedComponent extends Component {
    state = {
            isOpen: false,
            isComment: false
        }

    render () {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen} toggleComment = {this.toggleComment}/>
    }


    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComment = () => {
        this.setState({
            isComment: !this.state.isComment
        })
    }

}