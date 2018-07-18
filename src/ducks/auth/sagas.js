import services from '../../services';
import actions from './actions';
import {call, put} from 'redux-saga/effects';

export function* loginSaga(credentials) {
    try {
        yield put(actions.loginRequest(credentials));
        const {username} = yield call(services.login, credentials);
        yield put(actions.loginSuccess(username));
    } catch (e) {
        yield put(actions.loginError(e));
        console.log(e.statusMessage);
        return e.statusMessage;
    }
}

export function* registerSaga(credentials) {
    try {
        yield put(actions.registerRequest(credentials));
        const {username} = yield call(services.register, credentials);
        yield put(actions.registerSuccess(username));
    } catch (e) {
        yield put(actions.registerError(e));
        console.log(e.statusMessage);
        return e.statusMessage;
    }
}
