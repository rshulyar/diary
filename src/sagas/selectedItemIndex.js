import { takeEvery, select } from 'redux-saga/effects';

function* watchSelectedItemIndex() {
    yield takeEvery('selected', rewriteSelectedItemIndex);
}

function* rewriteSelectedItemIndex() {
    localStorage.setItem('selectedItem', yield select(x => x.selectedItem));
}

export default watchSelectedItemIndex;