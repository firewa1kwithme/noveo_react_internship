import {Redirect, Route} from 'react-router-dom';
import React, {Fragment} from 'react';
import {ConnectedNavBarContainer} from '../../../containers/NavBarContainer';
import Routes from '../../../constants';


//TODO: выйти в навбаре если залогинен
export default function CommonLayoutComponent({component: Component, isAuthenticated, ...restProps}) {
    console.log('**** CommonLayoutComponent props:')
    console.log(restProps)
    if (!isAuthenticated) {
        return <Redirect to={Routes.LOGIN}/>;
    }
    return (
        <Route {...restProps} render={props => {
            return (
                <Fragment>
                    <ConnectedNavBarContainer/>
                    <Component {...props} onLogin={restProps.onLogin} onLogout={restProps.onLogout}/>
                </Fragment>
            );
        }}/>
    );
}


