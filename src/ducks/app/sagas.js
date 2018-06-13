import {all, call, takeLatest, put} from 'redux-saga/effects';
import {registerSaga, loginSaga, fetchUserSaga, logoutSaga} from 'ducks/auth/sagas';
import types from './types';
import actions from './actions';

/**
 *
 * @param {Object} action
 * @param {UserCredentials} action.credentials
 * @returns {IterableIterator<*>}
 */
function* registerUserSaga(action) {
    yield call(registerSaga, action.credentials);
}

/**
 *
 * @param {Object} action
 * @param {UserCredentials} action.credentials
 * @returns {IterableIterator<*>}
 */
function* loginUserSaga(action) {
    yield call(loginSaga, action.credentials);
}

/**
 * @returns {IterableIterator<*>}
 */
function* logoutUserSaga() {
    yield call(logoutSaga);
}

/**
 * @returns {IterableIterator<*>}
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
        call(initAppSaga)
    ]);
}
