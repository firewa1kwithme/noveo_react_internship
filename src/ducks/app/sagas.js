import {all, call, takeLatest, put} from 'redux-saga/effects';
import {registerSaga, loginSaga, fetchUserSaga, logoutSaga} from 'ducks/auth/sagas';
import {fetchArticlesSaga} from 'ducks/article/sagas';
import types from './types';
import actions from './actions';

/**
 *
 * @param {Object} action
 * @param {UserCredentials} action.credentials
 * @return {IterableIterator<*>}
 */
function* registerUserSaga(action) {
    yield call(registerSaga, action.credentials);
}

/**
 *
 * @param {Object} action
 * @param {UserCredentials} action.credentials
 * @return {IterableIterator<*>}
 */
function* loginUserSaga(action) {
    yield call(loginSaga, action.credentials);
}

/**
 * @return {IterableIterator<*>}
 */
function* logoutUserSaga() {
    yield call(logoutSaga);
}

function* articlesSaga(action) {
    const {limit, offset} = action;
    yield call(fetchArticlesSaga, limit, offset);
}

/**
 * @return {IterableIterator<*>}
 */
function* initAppSaga() {
    yield call(fetchUserSaga);
    yield put(actions.initApp());
}

export default function* () {
    yield all([
        takeLatest(types.REGISTER_USER, registerUserSaga),
        takeLatest(types.LOGIN_USER, loginUserSaga),
        takeLatest(types.LOGOUT_USER, logoutUserSaga),
        takeLatest(types.FETCH_ARTICLES, articlesSaga),
        call(initAppSaga)
    ]);
}
