import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router-dom/Route';
import NavbarComponent from 'components/navbar/NavbarComponent';

function LayoutComponent({component: Component, ...restProps}) {
    return (
        <Route {...restProps} render={props => {
            return (
                <Fragment>
                    <NavbarComponent/>
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
    path: PropTypes.string.isRequired
};

export default LayoutComponent;
