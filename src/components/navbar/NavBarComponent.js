import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './NavBarComponent.scss';


export default function NavBarComponent (props) {

    const condition = props.username;
    return (
        <div className={styles.navbar}>
            <h1>Blog</h1>
            {condition
                ? <Fragment>
                    <p>{props.username}</p>,
                    <button>logout</button>
                </Fragment>
                : <button>login</button>}
        </div>
    );
}
//
NavBarComponent.propTypes = {
    username: PropTypes.string
};
