import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './NavBarComponent.scss';
import {Link, withRouter} from 'react-router-dom';

function NavBarComponent (props) {

    const redirectNewArticle = () => {
        props.history.push('/new');
    };
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
            <p onClick={redirectNewArticle}> Жми КЛАСС </p>
        </div>
    );
}
//
NavBarComponent.propTypes = {
    username: PropTypes.string
};

export default withRouter(NavBarComponent);
