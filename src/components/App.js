import React, {Component} from 'react'
import Proptypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'


class App extends Component {
    static Proptypes = {}

    state = {
        selection: null
    }


    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <UserForm/>
                <Select
                    value={this.state.selection}
                    onChange={this.changeSelection}
                    options={options}
                />
                <ArticleList articles={this.props.articles}/>
            </div>
        )
    }

    changeSelection = selection => this.setState({selection})
}

export default App