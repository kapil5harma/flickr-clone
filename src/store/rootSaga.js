import { takeLatest } from 'redux-saga/effects';

// Import all ActionTypes
import { Types } from './rootActions';

// Import all Sagas
import { fetchSearchResultsSaga } from '../app/groups/store';

export function* watchGroups() {
  yield takeLatest(Types.FETCH_SEARCH_RESULTS, fetchSearchResultsSaga);
}

// console.log('Types: ', Types);
