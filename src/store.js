import {createStore, applyMiddleware, combineReducers} from 'redux';
import authReducer from './ducks/auth/reducer';
import articlesReducer from './ducks/article/reducer';
import appReducer from './ducks/app/reducer';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './RootSaga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const CombinedReducer = combineReducers({
    auth: authReducer,
    articles: articlesReducer,
    // currentArticle: articlesReducer,
    app: appReducer
});
const store = createStore(
    connectRouter(history)(CombinedReducer),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
);
sagaMiddleware.run(rootSaga);
export {store, history};
