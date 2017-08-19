/**
 * Created by ilyaChizhov on 18.08.17.
 */

import React from 'react'
import Article from './Article'


export default function ArticleList({articles}) {
    const articleElement = articles.map((article) => <li key={article.id}><Article article={article}/></li>)

    return (
        <ul>
            {articleElement}
        </ul>
    )
}
