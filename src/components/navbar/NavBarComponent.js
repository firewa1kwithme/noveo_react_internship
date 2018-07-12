import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBarComponent.scss';


export default function NavBarComponent (props) {

    return (
        <div className={styles.navbar}>
            <h1>Blog</h1>
            <p>{props.username}</p>
            <button>logout</button>
        </div>
    );
}

NavBarComponent.propTypes = {
    username: PropTypes.string
};
