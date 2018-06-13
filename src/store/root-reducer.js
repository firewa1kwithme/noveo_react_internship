import {combineReducers} from 'redux';
import {authReducer} from 'ducks/auth';
import {appReducer} from 'ducks/app';
import {routerReducer} from 'ducks/router';

export default combineReducers({
    app: appReducer,
    auth: authReducer,
    router: routerReducer
});
