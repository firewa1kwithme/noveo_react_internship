import 'bootstrap.js';
import React from 'react';
import {render} from 'react-dom';
import AppContainer from './containers/AppContainer';


const rootElement = document.getElementById('app');

render(
    <AppContainer/>,
    rootElement
);
