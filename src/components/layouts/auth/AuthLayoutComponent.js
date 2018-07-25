import {Redirect, Route} from 'react-router-dom';
import React from 'react';
import Routes from '../../../constants';
import PropTypes from 'prop-types';

export default function AuthLayoutComponent({component: Component, isAuthenticated, ...restProps}) {
    if (isAuthenticated) {
        return <Redirect to={Routes.FEED}/>;
    }
    return (
        <Route {...restProps} render={props => {
            return (
                <Component {...props}/>
            );
        }}/>
    );
}

AuthLayoutComponent.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};
