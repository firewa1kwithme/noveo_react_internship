import {put} from 'redux-saga/effects';
import {push} from 'react-router-redux';

/**
 * Push location to browser history
 *
 * @param {string|Object} location
 */
export function* changeRouteSaga(location) {
    yield put(push(location));
}

export default {
    changeRouteSaga
};
