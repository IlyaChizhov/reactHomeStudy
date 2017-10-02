import React, {Component} from 'react'
import App from './components/App'
import Proptypes from 'prop-types'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DatePicker from './DatePicker'
import AddComment from './AddComment'
import Counter from './Counter'
import store from '../store'
import {Provider} from 'react-redux'

function Root(props) {
        return (
            <div>
                <Provider store={store}>
                <App {...props}/>
                </Provider>
            </div>
        )

}
