import {Redirect, Route} from 'react-router-dom';
import React from 'react';
import Routes from '../../../constants';

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
