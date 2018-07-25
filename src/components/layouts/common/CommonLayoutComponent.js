import {Redirect, Route} from 'react-router-dom';
import React, {Fragment} from 'react';
import NavBarContainer from '../../../containers/NavBarContainer';
import Routes from '../../../constants';
import PropTypes from 'prop-types';

export default function CommonLayoutComponent({component: Component, isAuthenticated, ...restProps}) {
    if (!isAuthenticated) {
        return <Redirect to={Routes.LOGIN}/>;
    }

    return (
        <Route {...restProps} render={props => {
            return (
                <Fragment>
                    <NavBarContainer/>
                    <Component {...props} onLogin={restProps.onLogin} onLogout={restProps.onLogout}/>
                </Fragment>
            );
        }}/>
    );
}

CommonLayoutComponent.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};
