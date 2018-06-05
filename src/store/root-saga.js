import {call, all} from 'redux-saga/effects';
import {appSagas} from 'ducks/app';

export default function* () {
    yield all([
        call(appSagas)
    ]);
}
