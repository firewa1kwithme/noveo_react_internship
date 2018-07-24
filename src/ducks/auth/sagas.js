import services from './services';
import actions from './actions';
import {call, put} from 'redux-saga/effects';
import {AUTH_TOKEN_KEY} from 'config.js';

export function* loginSaga(credentials) {
    try {
        yield put(actions.loginRequest(credentials));
        const response = yield call(services.login, credentials);
        yield put(actions.loginSuccess(response.user));
    } catch (e) {
        yield put(actions.loginError(e.errorCode));
    }
}

export function* registerSaga(credentials) {
    try {
        yield put(actions.registerRequest(credentials));
        const response = yield call(services.register, credentials);
        yield put(actions.registerSuccess(response.user));
    } catch (e) {
        yield put(actions.registerError(e.errorCode));
    }
}

export function* fetchUserSaga() {
    try {
        yield put(actions.fetchUserRequest());
        const response = yield call(services.fetchUser);
        yield put(actions.fetchUserSuccess(response.user));
    } catch (e) {
        yield put(actions.fetchUserError(e.errorCode));
    }
}

export function* logoutSaga() {
    yield put(actions.logout());
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
}
