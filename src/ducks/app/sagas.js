import appActionTypes from './action-types';
import {call, all, takeLatest, put} from 'redux-saga/effects';
import {loginSaga, registerSaga, logoutSaga, fetchUserSaga} from '../auth/sagas';
import {allArticlesSaga, newArticleSaga, singleArticleSaga} from '../article/sagas';
import {push} from 'connected-react-router';
import Routes from '../../constants';
import actions from './actions';

function* loginUserSaga(action) {
    yield call(loginSaga, {
        username: action.username,
        password: action.password
    });
}

function* registerUserSaga(action) {
    yield call(registerSaga, {
        username: action.username,
        password: action.password
    });
}

function* showAllArticlesSaga(action) {
    yield call(allArticlesSaga, action);
}

function* changeRouteSaga(location) {
    yield put(push(location));
}

function* createArticleSaga(action) {
    yield call(newArticleSaga, {
        title: action.title,
        content: action.content,
        imageUrl: action.imageUrl
    });

    yield call(changeRouteSaga, Routes.FEED);
}

function* initAppSaga() {
    yield call(fetchUserSaga);
    yield put(actions.initial());
}

function* logoutUserSaga() {
    yield call(logoutSaga);
}

function* fetchArticleSaga(action) {
    yield call(singleArticleSaga, action.id);
}

export default function* () {
    yield all([
        takeLatest(appActionTypes.LOGIN, loginUserSaga),
        takeLatest(appActionTypes.REGISTER, registerUserSaga),
        takeLatest(appActionTypes.FETCH_ALL_ARTICLES, showAllArticlesSaga),
        takeLatest(appActionTypes.NEW_ARTICLE, createArticleSaga),
        takeLatest(appActionTypes.LOGOUT, logoutUserSaga),
        takeLatest(appActionTypes.FETCH_ARTICLE, fetchArticleSaga),
        call(initAppSaga)
    ]);
}
