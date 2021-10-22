import { takeEvery, put } from "redux-saga/effects";

function* watchInitialization() {
    yield takeEvery('startLoadItemsBase', doWatchInitialization);
}

function* doWatchInitialization() {
    let loadState;
    const fromStorage = localStorage.getItem('itemsBase');
    if(fromStorage !== null && fromStorage !== '[]') {
        loadState = JSON.parse(fromStorage);
        yield put({type: 'finishLoadItemsBase', payload: loadState})
    }
}

export default watchInitialization;