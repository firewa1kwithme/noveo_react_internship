import React from 'react';
import SpinnerIcon from 'components/icons/SpinnerIcon';
import styles from './LoaderComponent.scss';

export default function LoaderComponent() {
    return (
        <div className={styles.spinnerWrapper}>
            <SpinnerIcon className={styles.spinner} fill='gray'/>
        </div>
    );
}
