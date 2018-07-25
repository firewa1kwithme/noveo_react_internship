import React, {Component} from 'react';
import ArticleOverviewComponent from '../components/articleoverview/ArticleOverviewComponent';
import {connect} from 'react-redux';
import {selectArticle} from '../ducks/article/selectors';
import {selectUser} from '../ducks/auth/selectors';
import PropTypes from 'prop-types';
import actions from '../ducks/app/actions';

class ArticleOverviewContainer extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        fetchArticle: PropTypes.func.isRequired,
        article: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.id);
    }

    render() {
        return (
            <ArticleOverviewComponent article={this.props.article} user={this.props.user}/>
        );
    }
}

export default connect(
    (state) => ({
        article: selectArticle(state),
        user: selectUser(state)
    }),
    {
        fetchArticle: actions.fetchArticle
    })(ArticleOverviewContainer);


