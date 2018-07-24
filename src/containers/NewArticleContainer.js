import React, {Component} from 'react';
import NewArticleComponent from '../components/newarticle/NewArticleComponent';
import {connect} from 'react-redux';
import actions from '../ducks/app/actions';
import PropTypes from 'prop-types';

class NewArticleContainer extends Component {
    static propTypes = {
        fetchAllArticles: PropTypes.func
    };
    render() {
        return (
            <NewArticleComponent newArticleFunction={this.props.fetchAllArticles}/>
        );
    }
}

export default connect(
    null,
    (dispatch) => {
        return {
            fetchAllArticles: (title, content, imageUrl) =>
                (dispatch(actions.newArticleAction(title, content, imageUrl)))
        };
    })(NewArticleContainer);
