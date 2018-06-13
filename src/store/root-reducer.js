import {combineReducers} from 'redux';
import {appReducer} from 'ducks/app';
import {authReducer} from 'ducks/auth';
import {articleReducer} from 'ducks/article';
import {routerReducer} from 'ducks/router';

export default combineReducers({
    app: appReducer,
    auth: authReducer,
    router: routerReducer,
    article: articleReducer
});
