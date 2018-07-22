import React, {Component} from 'react';
import NewArticleComponent from '../components/newarticle/NewArticleComponent';
import {connect} from 'react-redux';
import actions from '../ducks/article/actions';

class NewArticleContainer extends Component {
    render() {
        return (
            <NewArticleComponent newArticleFunction={this.props.fetchAllArticles}/>
        );
    }
}

export const ConnectedNewArticleContainer = connect(
    null,
    (dispatch) => {
        return {
            fetchAllArticles: (title, content, imageUrl) =>
                (dispatch(actions.newArticleAction(title, content, imageUrl)))
        };
    })(NewArticleContainer);
