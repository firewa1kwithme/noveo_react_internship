import {all, call, takeLatest} from 'redux-saga/effects';
import {registerSaga, loginSaga, fetchUserSaga, logoutSaga} from 'ducks/auth/sagas';
import {changeRouteSaga} from 'ducks/router/sagas';
import types from './types';

/**
 *
 * @param {Object} action
 * @param {UserCredentials} action.credentials
 * @returns {IterableIterator<*>}
 */
function* registerUserSaga(action) {
    const {error} = yield call(registerSaga, action.credentials);

    if (error) {
        return;
    }

    //yield call(changeRouteSaga, '/');
}

/**
 *
 * @param {Object} action
 * @param {UserCredentials} action.credentials
 * @returns {IterableIterator<*>}
 */
function* loginUserSaga(action) {
    const {error} = yield call(loginSaga, action.credentials);

    if (error) {
        return;
    }
}

/**
 * @returns {IterableIterator<*>}
 */
function* logoutUserSaga() {
    yield call(logoutSaga);
}

function* initAppSaga() {
    yield call(fetchUserSaga);
}

export default function* () {
    yield all([
        takeLatest(types.REGISTER_USER, registerUserSaga),
        takeLatest(types.LOGIN_USER, loginUserSaga),
        takeLatest(types.LOGOUT_USER, logoutUserSaga),
        call(initAppSaga)
    ]);
}
