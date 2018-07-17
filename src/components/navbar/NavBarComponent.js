import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './NavBarComponent.scss';
import {withRouter} from 'react-router-dom';

function NavBarComponent (props) {

    const redirectNewArticle = () => {
        props.history.push('/new');
    };
    const redirectFeed = () => {
        props.history.push('/feed');
    };
    const condition = props.username!=='';
    return (
        <div className={styles.navbar}>
            <h1 onClick={redirectFeed}>Перемоем косточки?</h1>
            {condition
                ? <Fragment>
                    <p>{props.username}</p>
                    <button onClick={props.onLogout}> Выйти </button>
                </Fragment>
                : <button onClick={props.onLogin} > Войти </button>}
            <p onClick={redirectNewArticle}> Жми КЛАСС </p>
        </div>
    );
}

NavBarComponent.propTypes = {
    username: PropTypes.string
};

export default withRouter(NavBarComponent);
