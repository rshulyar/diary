import { fork } from 'redux-saga/effects';

import watchInitialization from './initializationState';
import watchUpdateState from './updateState';
import watchSelectedItemIndex from './selectedItemIndex';

function* rootSaga() {
    yield fork(watchInitialization);
    yield fork(watchUpdateState);
    yield fork(watchSelectedItemIndex);
}

export default rootSaga;