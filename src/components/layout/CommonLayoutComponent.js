import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import NavbarContainer from 'containers/NavbarContainer';
import {Routes} from 'constants.js';

function CommonLayoutComponent({component: Component, isAuthenticated, ...restProps}) {
    if (!isAuthenticated) {
        return <Redirect to={Routes.LOGIN}/>;
    }

    return (
        <Route {...restProps} render={props => {
            return (
                <Fragment>
                    <NavbarContainer/>
                    <Component {...props}/>
                </Fragment>
            );
        }}/>
    );
}

CommonLayoutComponent.defaultProps = {
    exact: false
};

CommonLayoutComponent.propTypes = {
    component: PropTypes.func.isRequired,
    exact: PropTypes.bool,
    path: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default CommonLayoutComponent;
