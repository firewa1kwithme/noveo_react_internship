import {combineReducers} from 'redux';
import {authReducer} from 'ducks/auth';
import {routerReducer} from 'ducks/router';

export default combineReducers({
    auth: authReducer,
    router: routerReducer
});
