import React, {Component} from 'react'

export default (OriginalComponent) => class AccordionedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openArticleId: null
        }
    }

    render() {
        return <OriginalComponent {...this.state}  accordion = {{...this.props, toggleArticle: this.toggleItem}} />
    }

    toggleItem = openArticleId => (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        if (this.state.openArticleId === openArticleId) { // close opened Item
            this.setState({ // this. <- gets Accordeon scope
                openArticleId: null
            });
        } else {
            this.setState({
                openArticleId: openArticleId
            });
        }
    };
}