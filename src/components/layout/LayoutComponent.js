import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import NavbarContainer from 'containers/NavbarContainer';

function LayoutComponent({component: Component, isAuthenticated, ...restProps}) {
    if (!isAuthenticated) {
        return <Redirect to='/login'/>;
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

LayoutComponent.defaultProps = {
    exact: false
};

LayoutComponent.propTypes = {
    component: PropTypes.func.isRequired,
    exact: PropTypes.bool,
    path: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default LayoutComponent;
