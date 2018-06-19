import 'bootstrap.js';
import React from 'react';
import {render} from 'react-dom';
import styles from './style.scss';

const appElement = document.getElementById('app');

render(<div className={styles.someClass}>React Application</div>, appElement);
