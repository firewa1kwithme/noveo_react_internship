import {call, put} from 'redux-saga/effects';
import actions from './actions';
import services from './services';
import {AUTH_TOKEN_KEY} from 'config.js';

/**
 * @param {UserCredentials} credentials
 * @return {IterableIterator<*>}
 */
export function* registerSaga(credentials) {
    try {
        yield put(actions.registerRequest(credentials));

        const {user} = yield call(services.register, credentials);
        yield put(actions.registerSuccess(user));
        return {payload: user};
    } catch (error) {
        yield put(actions.registerError(error));
        return {error};
    }
}

/**
 * @param {UserCredentials} credentials
 * @return {IterableIterator<*>}
 */
export function* loginSaga(credentials) {
    try {
        yield put(actions.loginRequest(credentials));

        const {user} = yield call(services.login, credentials);
        yield put(actions.loginSuccess(user));
        return {payload: user};
    } catch (error) {
        yield put(actions.loginError(error));
        return {error};
    }
}

/**
 * @return {IterableIterator<*>}
 */
export function* fetchUserSaga() {
    try {
        yield put(actions.fetchUserRequest());

        const {user} = yield call(services.fetchUser);
        yield put(actions.fetchUserSuccess(user));
        return {payload: user};
    } catch (error) {
        yield put(actions.fetchUserError(error));
        return {error};
    }
}

/**
 * @return {IterableIterator<*>}
 */
export function* logoutSaga() {
    yield put(actions.logout());
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
}

export default {
    registerSaga,
    loginSaga,
    fetchUserSaga,
    logoutSaga
};
