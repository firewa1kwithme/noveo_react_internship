import {all, call, takeLatest, put} from 'redux-saga/effects';
import {registerSaga, loginSaga, fetchUserSaga, logoutSaga} from 'ducks/auth/sagas';
import {fetchArticlesSaga, fetchSingleArticleSaga, createArticleSaga} from 'ducks/article/sagas';
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

/**
 * @param {Object} action
 * @param {number} action.limit
 * @param {number} action.offset
 * @return {IterableIterator<*>}
 */
function* fetchFeedSaga(action) {
    const {limit, offset} = action;
    yield call(fetchArticlesSaga, limit, offset);
}

/**
 * @param {Object} action
 * @param {number|string} action.id
 * @return {IterableIterator<*>}
 */
function* fetchArticleSaga(action) {
    yield call(fetchSingleArticleSaga, action.id);
}

/**
 * @param {Object} action
 * @param {Object} action.payload
 * @return {IterableIterator<*>}
 */
function* createNewArticleSaga(action) {
    yield call(createArticleSaga, action.payload);
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
        takeLatest(types.FETCH_ARTICLES, fetchFeedSaga),
        takeLatest(types.FETCH_ARTICLE, fetchArticleSaga),
        takeLatest(types.CREATE_NEW_ARTICLE, createNewArticleSaga),
        call(initAppSaga)
    ]);
}
