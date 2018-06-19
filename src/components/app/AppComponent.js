import {hot} from 'react-hot-loader';
import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import {Routes} from 'constants.js';
import LoginContainer from 'containers/LoginContainer';
import RegisterContainer from 'containers/RegisterContainer';
import FeedContainer from 'containers/FeedContainer';
import ArticleContainer from 'containers/ArticleContainer';
import CommonLayoutComponent from 'components/layout/CommonLayoutComponent';
import AuthLayoutComponent from 'components/layout/AuthLayoutComponent';
import LoaderComponent from 'components/common/loader/LoaderComponent';

function AppComponent(props) {
    if (!props.isInitialised) {
        return (
            <LoaderComponent/>
        );
    }

    const redirectToLogin = () => <Redirect to={Routes.LOGIN}/>;
    const redirectToFeed = () => <Redirect to={Routes.FEED}/>;

    return (
        <Provider store={props.store}>
            <ConnectedRouter history={props.history}>
                <Switch>
                    <Route
                        exact
                        path={Routes.ROOT}
                        render={props.isAuthenticated ? redirectToFeed : redirectToLogin}
                    />
                    <AuthLayoutComponent
                        path={Routes.LOGIN}
                        component={LoginContainer}
                        isAuthenticated={props.isAuthenticated}
                    />
                    <AuthLayoutComponent
                        path={Routes.REGISTER}
                        component={RegisterContainer}
                        isAuthenticated={props.isAuthenticated}
                    />
                    <CommonLayoutComponent
                        path={Routes.FEED}
                        component={FeedContainer}
                        isAuthenticated={props.isAuthenticated}
                    />
                    <CommonLayoutComponent
                        path={Routes.ARTICLE}
                        component={ArticleContainer}
                        isAuthenticated={props.isAuthenticated}
                    />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}

AppComponent.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isInitialised: PropTypes.bool.isRequired
};

export default hot(module)(AppComponent);
