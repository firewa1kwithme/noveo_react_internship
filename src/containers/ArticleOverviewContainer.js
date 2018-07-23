import React, {Component} from 'react';
import ArticleOverviewComponent from '../components/articleoverview/ArticleOverviewComponent';
import {connect} from 'react-redux';
import {selectArticles} from '../ducks/article/selectors';

class ArticleOverviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {}
        };
    }

    render() {
        let currentArticle = {};
        this.props.articles.forEach((article) => {
            if (article.id === parseInt(this.props.match.params.articleId)) {
                currentArticle = article;
            }
        });

        return (
            <ArticleOverviewComponent {...currentArticle}/>
        );
    }
}

export const ConnectedArticleOverviewContainer = connect((state) => {
    return {
        articles: selectArticles(state)
    };
})(ArticleOverviewContainer);


