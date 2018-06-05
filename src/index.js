import 'bootstrap.js';
import React from 'react';
import {render} from 'react-dom';
import store, {history} from 'store';
import App from 'components/app/AppComponent';

const appElement = document.getElementById('app');

render(<App store={store} history={history}/>, appElement);
