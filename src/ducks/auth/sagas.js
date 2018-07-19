import services from './services';
import actions from './actions';
import {call, put} from 'redux-saga/effects';

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
        console.log(response)
        yield put(actions.registerSuccess(response.user));
    } catch (e) {
        yield put(actions.registerError(e.errorCode));
    }
}

