import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import styles from './AuthWrapperComponent.scss';

function AuthWrapperComponent(props) {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.formContainer}>
                <h1
                    className={styles.formTitle}
                    dangerouslySetInnerHTML={{__html: props.title}}
                />
                <div className={styles.formBody}>
                    {props.children}
                </div>
                <Link to={props.linkTo}>
                    <p className={styles.formLink}>{props.linkText}</p>
                </Link>
            </div>
        </div>
    );
}

AuthWrapperComponent.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
};

export default AuthWrapperComponent;
