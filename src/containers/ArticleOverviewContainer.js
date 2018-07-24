import React, {Component} from 'react';
import ArticleOverviewComponent from '../components/articleoverview/ArticleOverviewComponent';
import {connect} from 'react-redux';
import {selectArticles} from '../ducks/article/selectors';
import PropTypes from 'prop-types';

class ArticleOverviewContainer extends Component {

    static propTypes = {
        articles: PropTypes.array,
        match: PropTypes.object
    };

    render() {
        let currentArticle = {};
        this.props.articles.forEach((article) => {
            if (article.id === parseInt(this.props.match.params.articleId, 10)) {
                currentArticle = article;
            }
        });

        return (
            <ArticleOverviewComponent {...currentArticle}/>
        );
    }
}

export default connect((state) => {
    return {
        articles: selectArticles(state)
    };
})(ArticleOverviewContainer);


