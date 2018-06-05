import {all, call, takeLatest} from 'redux-saga/effects';
import {registerSaga} from 'ducks/auth/sagas';
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

    yield call(changeRouteSaga, '/');
}

export default function* () {
    yield all([
        takeLatest(types.REGISTER_USER, registerUserSaga)
    ]);
}
