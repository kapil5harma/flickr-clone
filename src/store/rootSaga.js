import { takeLatest } from 'redux-saga/effects';

// Import all ActionTypes
import { Types } from './rootActions';

// Import all Sagas
import { fetchSearchResultsSaga } from '../app/groups/store';
import { fetchGallerySaga } from '../app/gallery/store/sagas';

export function* watchGroups() {
  yield takeLatest(Types.FETCH_SEARCH_RESULTS, fetchSearchResultsSaga);
}

export function* watchGallery() {
  yield takeLatest(Types.FETCH_PHOTOS, fetchGallerySaga);
}

// console.log('Types: ', Types);
