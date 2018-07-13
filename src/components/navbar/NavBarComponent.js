import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBarComponent.scss';


export default function NavBarComponent (props) {

    const condition = props.user.username;
    return (
        <div className={styles.navbar}>
            <h1>Blog</h1>
            {condition
                ? [
                    <p>{props.user.username}</p>,
                    <button>logout</button>
                ]
                : <button>login</button>}
        </div>
    );
}
//
// NavBarComponent.propTypes = {
//     username: PropTypes.string
// };
