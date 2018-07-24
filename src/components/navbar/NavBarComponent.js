import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './NavBarComponent.scss';
import {withRouter, Link} from 'react-router-dom';
import Routes from '../../constants';

function NavBarComponent (props) {

    const condition = props.username!=='';
    return (
        <div className={styles.navbar}>
            <Link to={Routes.FEED}><h1>First react-redux blog</h1></Link>
            {condition
                ? <Fragment>
                    <p>{props.username}</p>
                    <button onClick={props.onLogout}> Выйти </button>
                </Fragment>
                : <button onClick={props.onLogin} > Войти </button>}
        </div>
    );
}

NavBarComponent.propTypes = {
    username: PropTypes.string,
    onLogin: PropTypes.func,
    onLogout: PropTypes.func
};

export default withRouter(NavBarComponent);
