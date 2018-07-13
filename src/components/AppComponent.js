import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import NavBarContainer from '../containers/NavBarContainer';
import ArticleOverviewContainer from '../containers/ArticleOverviewContainer';
import LoginContainer from '../containers/LoginContainer';

export default class AppComponent extends Component {

    render() {
        return (
            <Fragment>
                <NavBarContainer/>
                <ArticleOverviewContainer/>
                <LoginContainer/>
            </Fragment>
        );
    }
}
