import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './NavBarComponent.scss';
import {Link} from 'react-router-dom';


export default function NavBarComponent (props) {

    const condition = props.username;
    return (
        <div className={styles.navbar}>
            <h1>Перемоем косточки?</h1>
            {condition
                ? <Fragment>
                    <p>{props.username}</p>,
                    <Link to='/login'> Выйти </Link>
                </Fragment>
                : <Link to='/login'> Войти </Link>}
        </div>
    );
}
//
NavBarComponent.propTypes = {
    username: PropTypes.string
};
