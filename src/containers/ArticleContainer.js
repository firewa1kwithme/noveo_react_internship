import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {appActions} from 'ducks/app';
import {articleSelectors} from 'ducks/article';
import ArticleOverviewComponent from 'components/article/article-overview/ArticleOverviewComponent';
import LoaderComponent from 'components/common/loader/LoaderComponent';

class ArticleContainer extends Component {
    static propTypes = {
        fetchArticle: PropTypes.func.isRequired,
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string
            })
        }).isRequired,
        article: PropTypes.object
    };

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.id);
    }

    render() {
        return (
            this.props.article ? <ArticleOverviewComponent {...this.props.article}/> : <LoaderComponent/>
        );
    }
}

export default connect((state, ownProps) => {
    return {
        article: articleSelectors.selectArticle(state, ownProps.match.params.id)
    };
}, {
    fetchArticle: appActions.fetchArticle
})(ArticleContainer);
