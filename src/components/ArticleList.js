/**
 * Created by ilyaChizhov on 18.08.17.
 */

import React, {Component} from 'react'
import Article from './Article'
import Accordioned from '../decorators/accordion'


class ArticleList extends Component {

    render() {
        const {toggleArticle, articles} = this.props.accordion
        const {openArticleId} = this.props

        console.log(openArticleId)

        const articleElement = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id === openArticleId}
                toggleOpen={toggleArticle( article.id)}
            /></li>)

        return (
            <ul>
                {articleElement}
            </ul>
        )
    }
}

export default Accordioned(ArticleList)
