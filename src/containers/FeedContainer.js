import React, {Component} from 'react';
import FeedComponent from '../components/feed/FeedComponent';
import {selectArticles} from '../ducks/article/selectors';
import {connect} from 'react-redux';
import actions from '../ducks/article/actions';

class FeedContainer extends Component {
    componentDidMount() {
        this.props.fetchAllArticles();
    }

    render() {
        return (
            <FeedComponent articles={this.props.articles}/>
        );
}

}

export default connect((state) => {
    return {
        articles: selectArticles(state)
    };
},
(dispatch) => {
    return {
        fetchAllArticles: () => (dispatch(actions.fetchAllArticles()))
    };
})(FeedContainer);
