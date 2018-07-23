import 'bootstrap.js';
import React from 'react';
import {render} from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import {store, history} from './store';
import {Provider} from 'react-redux';
import {ConnectedAppContainer} from './containers/AppContainer';

const rootElement = document.getElementById('app');


render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConnectedAppContainer/>
        </ConnectedRouter>
    </Provider>, rootElement);
