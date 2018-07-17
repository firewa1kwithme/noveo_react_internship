import 'bootstrap.js';
import React from 'react';
import {render} from 'react-dom';
import AppContainer from './containers/AppContainer';
import {loginAction, logoutAction} from './redux/actions';
import {store} from './redux/store';
import {Provider} from 'react-redux'
import authFunction from './redux/reducer';
import actionTypes from './redux/action-types';
import {ConnectedAppContainer} from './containers/AppContainer';

const rootElement = document.getElementById('app');


render(
    <Provider store={store}>
        <ConnectedAppContainer/>
    </Provider>, rootElement);
