import {hot} from 'react-hot-loader';
import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import LoginComponent from 'components/login/LoginComponent';
import RegisterContainer from 'containers/RegisterContainer';
import LayoutComponent from 'components/layout/LayoutComponent';
import GridComponent from 'components/grid/GridComponent';
import ArticleComponent from 'components/article/ArticleComponent';

function AppComponent(props) {
    const redirectFromRoot = function () {
        return <Redirect to='/feed'/>;
    };

    return (
        <Provider store={props.store}>
            <ConnectedRouter history={props.history}>
                <Switch>
                    <Route exact path='/' render={redirectFromRoot}/>
                    <Route path='/login' component={LoginComponent}/>
                    <Route path='/register' component={RegisterContainer}/>
                    <LayoutComponent path='/feed' component={GridComponent}/>
                    <LayoutComponent path='/article/:id' component={ArticleComponent}/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}

AppComponent.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default hot(module)(AppComponent);
