import {hot} from 'react-hot-loader';
import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import LoginContainer from 'containers/LoginContainer';
import RegisterContainer from 'containers/RegisterContainer';
import FeedContainer from 'containers/FeedContainer';
import LayoutComponent from 'components/layout/LayoutComponent';
import AuthLayoutComponent from 'components/auth-layout/AuthLayoutComponent';
import ArticleComponent from 'components/article/ArticleComponent';
import LoaderComponent from 'components/loader/LoaderComponent';

function AppComponent(props) {
    if (!props.isInitialised) {
        return (
            <LoaderComponent/>
        );
    }

    const redirectToLogin = () => <Redirect to='/login'/>;
    const redirectToFeed = () => <Redirect to='/feed'/>;

    return (
        <Provider store={props.store}>
            <ConnectedRouter history={props.history}>
                <Switch>
                    <Route exact path='/' render={props.isAuthenticated ? redirectToFeed : redirectToLogin}/>
                    <AuthLayoutComponent
                        path='/login'
                        component={LoginContainer}
                        isAuthenticated={props.isAuthenticated}
                    />
                    <AuthLayoutComponent
                        path='/register'
                        component={RegisterContainer}
                        isAuthenticated={props.isAuthenticated}
                    />
                    <LayoutComponent
                        path='/feed'
                        component={FeedContainer}
                        isAuthenticated={props.isAuthenticated}
                    />
                    <LayoutComponent
                        path='/article/:id'
                        component={ArticleComponent}
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
