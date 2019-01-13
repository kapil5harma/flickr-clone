import axios from 'axios';
import { put } from 'redux-saga/effects';
import { Creators } from './actions';
import { apiEndpoints } from '../../../config/config';

// *************************** Fetch Groups Saga ***************************
export function* fetchSearchResultsSaga(action) {
  // console.log('action: ', action);
  try {
    const searchText = action.searchText;
    yield put(Creators.fetchSearchResultsStart());
    const url = `${apiEndpoints.search}&api_key=${
      process.env.REACT_APP_FLICKR_KEY
    }&text=${searchText}&per_page=6&format=json&nojsoncallback=1`;
    const res = yield axios.post(url);
    // console.log('res: ', res);
    const groups = [];
    for (let key in res.data.groups.group) {
      groups.push({
        id: key,
        ...res.data.groups.group[key]
      });
    }
    // console.log('groups: ', groups);
    yield put(Creators.fetchSearchResultsSuccess(groups));
  } catch (err) {
    yield put(Creators.fetchSearchResultsFailure(err));
  }
}
// __________________________________________________________________________
