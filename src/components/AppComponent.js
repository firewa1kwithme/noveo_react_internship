import ArticleOverviewContainer from '../containers/ArticleOverviewContainer';
import {ConnectedLoginContainer} from '../containers/LoginContainer';
import ConnectedFeedContainer from '../containers/FeedContainer';
import {ConnectedRegisterContainer} from '../containers/RegisterContainer';
import NewArticleContainer from '../containers/NewArticleContainer';
import React from 'react';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import AuthLayoutComponent from './layouts/auth/AuthLayoutComponent';
import CommonLayoutComponent from './layouts/common/CommonLayoutComponent';
import Routes from '../constants';

//TODO: с фида на логин
export default function AppComponent(props) {
    return (
        <Router>
            <Switch>
                <AuthLayoutComponent path={Routes.LOGIN} component={ConnectedLoginContainer}
                    isAuthenticated={props.isAuthenticated} />
                <CommonLayoutComponent path={Routes.FEED} component={ConnectedFeedContainer}
                    isAuthenticated={props.isAuthenticated}/>
                <AuthLayoutComponent path={Routes.REGISTER} component={ConnectedRegisterContainer}
                    isAuthenticated={props.isAuthenticated}/>
                <CommonLayoutComponent path='/article/:id' component={ArticleOverviewContainer}
                    isAuthenticated={props.isAuthenticated}/>
                <CommonLayoutComponent path={Routes.NEW} component={NewArticleContainer}
                    isAuthenticated={props.isAuthenticated}/>
                <Redirect from='/' to='/feed'/>
            </Switch>
        </Router>
    );
}
