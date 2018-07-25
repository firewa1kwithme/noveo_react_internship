import React, {Component} from 'react';
import NewArticleComponent from '../components/newarticle/NewArticleComponent';
import {connect} from 'react-redux';
import actions from '../ducks/app/actions';
import PropTypes from 'prop-types';

class NewArticleContainer extends Component {
    static propTypes = {
        fetchAllArticles: PropTypes.func.isRequired
    };

    render() {
        return (
            <NewArticleComponent newArticleFunction={this.props.fetchAllArticles}/>
        );
    }
}

export default connect(
    null,
    {
        fetchAllArticles: actions.newArticleAction
    })(NewArticleContainer);
