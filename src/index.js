import 'bootstrap.js';
import React from 'react';
import {render} from 'react-dom';
import styles from './style.scss';
import AppComponent from './components/AppComponent.js';


const rootElement = document.getElementById('app');

render(
    <AppComponent
        fetchUser = {function fetchUser() {
            return {
                username: 'Rick'
            };
        }}
    />,
    rootElement
);
