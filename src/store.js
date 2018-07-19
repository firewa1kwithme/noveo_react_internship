import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import authReducer from './ducks/auth/reducer';
import articleReducer from './ducks/article/reducer';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './RootSaga';
//TODO: тут можно еще заадть инишл стэйт объект

const sagaMiddleware = createSagaMiddleware();
const CombinedReucer = new combineReducers({
    auth: authReducer,
    article: articleReducer
})
const store = createStore(
    CombinedReucer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);
sagaMiddleware.run(rootSaga);
export {store};
