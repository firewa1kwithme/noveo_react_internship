import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './NavBarComponent.scss';
import {withRouter, Link} from 'react-router-dom';
import Routes from '../../constants';

function NavBarComponent(props) {
    return (
        <div className={styles.navbar}>
            <Link to={Routes.FEED}><h1>First react-redux blog</h1></Link>
            <p>@{props.user.username}</p>
            <button onClick={props.onLogout}> Выйти</button>
        </div>
    );
}

NavBarComponent.propTypes = {
    user: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired
};

export default withRouter(NavBarComponent);
