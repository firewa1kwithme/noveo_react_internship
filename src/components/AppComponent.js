import ArticleOverviewContainer from '../containers/ArticleOverviewContainer';
import LoginContainer from '../containers/LoginContainer';
import FeedContainer from '../containers/FeedContainer';
import RegisterContainer from '../containers/RegisterContainer';
import NewArticleContainer from '../containers/NewArticleContainer';
import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import AuthLayoutComponent from './layouts/auth/AuthLayoutComponent';
import CommonLayoutComponent from './layouts/common/CommonLayoutComponent';
import PropTypes from 'prop-types';
import Routes from '../constants';
import '../style.scss';

export default function AppComponent(props) {
    if (!props.isInit) {
        return (
            <div>Loading</div>
        );
    }
    return (
        <Switch>
            <AuthLayoutComponent path={Routes.LOGIN} component={LoginContainer}
                isAuthenticated={props.isAuthenticated}/>
            <CommonLayoutComponent path={Routes.FEED} component={FeedContainer}
                isAuthenticated={props.isAuthenticated}/>
            <AuthLayoutComponent path={Routes.REGISTER} component={RegisterContainer}
                isAuthenticated={props.isAuthenticated}/>
            <CommonLayoutComponent path='/article/:articleId' component={ArticleOverviewContainer}
                isAuthenticated={props.isAuthenticated}/>
            <CommonLayoutComponent path={Routes.NEW} component={NewArticleContainer}
                isAuthenticated={props.isAuthenticated}/>
            <Redirect from='/' to={Routes.FEED}/>
        </Switch>
    );
}

AppComponent.propTypes = {
    isInit: PropTypes.bool,
    isAuthenticated: PropTypes.bool
};
