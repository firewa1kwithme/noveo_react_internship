import {Redirect, Route} from 'react-router-dom';
import React, {Fragment} from 'react';
import NavBarContainer from '../../../containers/NavBarContainer';
import Routes from '../../../constants';

//TODO: выйти в навбаре если залогинен
export default function AuthLayoutComponent({component: Component, isAuthenticated, ...restProps}) {
    if (!isAuthenticated) {
        return <Redirect to={Routes.LOGIN}/>;
    }
    return (
        <Route {...restProps} render={props => {
            return (
                <Fragment>
                    <NavBarContainer/>
                    <Component {...props}/>
                </Fragment>
            );
        }}/>
    );
}
