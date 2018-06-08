import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';

function AuthLayoutComponent({component: Component, isAuthenticated, ...restProps}) {
    if (isAuthenticated) {
        return <Redirect to='/feed'/>;
    }

    return (
        <Route {...restProps} render={props => {
            return (
                <Component {...props}/>
            );
        }}/>
    );
}

AuthLayoutComponent.defaultProps = {
    exact: false
};

AuthLayoutComponent.propTypes = {
    component: PropTypes.func.isRequired,
    exact: PropTypes.bool,
    path: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default AuthLayoutComponent;