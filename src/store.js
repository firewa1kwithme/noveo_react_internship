import {createStore, applyMiddleware} from 'redux';
import authReducer from './ducks/auth/reducer';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './RootSaga';
//TODO: тут можно еще заадть инишл стэйт объект

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    authReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);
sagaMiddleware.run(rootSaga);
export {store};
