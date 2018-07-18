import 'bootstrap.js';
import React from 'react';
import {render} from 'react-dom';
import actions from './ducks/auth/actions';
import {store} from './store';
import {Provider} from 'react-redux';
import {ConnectedAppContainer} from './containers/AppContainer';

const rootElement = document.getElementById('app');


render(
    <Provider store={store}>
        <ConnectedAppContainer/>
    </Provider>, rootElement);
