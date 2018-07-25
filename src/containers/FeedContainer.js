import React, {Component} from 'react';
import FeedComponent from '../components/feed/FeedComponent';
import {selectArticles} from '../ducks/article/selectors';
import {connect} from 'react-redux';
import actions from '../ducks/app/actions';
import PropTypes from 'prop-types';

class FeedContainer extends Component {
    static propTypes = {
        fetchAllArticles: PropTypes.func.isRequired,
        articles: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.fetchAllArticles();
    }

    render() {
        return (
            <FeedComponent articles={this.props.articles}/>
        );
    }
}

export default connect(
    (state) => ({
        articles: selectArticles(state)
    }), {
        fetchAllArticles: actions.fetchAllArticles
    })(FeedContainer);
