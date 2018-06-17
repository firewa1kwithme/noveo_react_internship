import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {appActions} from 'ducks/app';
import {articleSelectors} from 'ducks/article';
import GridComponent from 'components/feed/grid/GridComponent';

class FeedContainer extends Component {
    static propTypes = {
        fetchArticles: PropTypes.func.isRequired,
        articles: PropTypes.arrayOf(PropTypes.object).isRequired,
        pagination: PropTypes.object.isRequired,
        hasMorePages: PropTypes.bool.isRequired,
        hasArticles: PropTypes.bool.isRequired
    };

    static DEFAULT_LIMIT = 10;

    static DEFAULT_OFFSET = 0;

    _handleFeedFetch = () => {
        const offset = this.props.pagination.offset + FeedContainer.DEFAULT_LIMIT;

        this.props.fetchArticles(FeedContainer.DEFAULT_LIMIT, offset);
    };

    /**
     * Usually it is better to move fetching logic to middleware,
     * e.g. redux-saga with custom routing watcher
     */
    componentDidMount() {
        if (!this.props.hasArticles) {
            this.props.fetchArticles(FeedContainer.DEFAULT_LIMIT, FeedContainer.DEFAULT_OFFSET);
        }
    }

    render() {
        return (
            <GridComponent
                articles={this.props.articles}
                fetchButtonClick={this._handleFeedFetch}
                showMoreButton={this.props.hasMorePages}
            />
        );
    }
}

export default connect((state) => {
    return {
        articles: articleSelectors.selectArticles(state),
        pagination: articleSelectors.selectPagination(state),
        hasMorePages: articleSelectors.selectHasMorePagesStatus(state),
        hasArticles: articleSelectors.selectHasArticlesStatus(state)
    };
}, {
    fetchArticles: appActions.fetchArticles
})(FeedContainer);
