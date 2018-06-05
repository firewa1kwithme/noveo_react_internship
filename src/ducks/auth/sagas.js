import {call, put} from 'redux-saga/effects';
import actions from './actions';
import services from './services';

/**
 *
 * @param {UserCredentials} credentials
 * @returns {IterableIterator<*>}
 */
export function* registerSaga(credentials) {
    try {
        yield put(actions.registerRequest(credentials));

        const user = yield call(services.register, credentials);
        yield put(actions.registerSuccess(user));
        return {payload: user};
    } catch (error) {
        yield put(actions.registerError(error));
        return {error};
    }
}

export default {
    registerSaga
};
