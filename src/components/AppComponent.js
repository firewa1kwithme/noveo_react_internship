import {ConnectedArticleOverviewContainer} from '../containers/ArticleOverviewContainer';
import {ConnectedLoginContainer} from '../containers/LoginContainer';
import ConnectedFeedContainer from '../containers/FeedContainer';
import {ConnectedRegisterContainer} from '../containers/RegisterContainer';
import {ConnectedNewArticleContainer} from '../containers/ConnectedNewArticleContainer';
import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import AuthLayoutComponent from './layouts/auth/AuthLayoutComponent';
import CommonLayoutComponent from './layouts/common/CommonLayoutComponent';
import Routes from '../constants';
import '../style.scss';

export default function AppComponent(props) {
    return (
        <Switch>
            <AuthLayoutComponent path={Routes.LOGIN} component={ConnectedLoginContainer}
                isAuthenticated={props.isAuthenticated} />
            <CommonLayoutComponent path={Routes.FEED} component={ConnectedFeedContainer}
                isAuthenticated={props.isAuthenticated}/>
            <AuthLayoutComponent path={Routes.REGISTER} component={ConnectedRegisterContainer}
                isAuthenticated={props.isAuthenticated}/>
            <CommonLayoutComponent path='/article/:articleId' component={ConnectedArticleOverviewContainer}
                isAuthenticated={props.isAuthenticated}/>
            <CommonLayoutComponent path={Routes.NEW} component={ConnectedNewArticleContainer}
                isAuthenticated={props.isAuthenticated}/>
            <Redirect from='/' to={Routes.FEED}/>
        </Switch>
    );
}
