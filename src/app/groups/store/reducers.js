import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = {
  loading: false,
  groups: null
};

// *************************** Fetch Groups ****************************
const fetchSearchResultsStart = (state = INITIAL_STATE, action) => {
  return { ...state, loading: true };
};

const fetchSearchResultsSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, groups: action.groups, loading: false };
};

const fetchSearchResultsFailure = (state = INITIAL_STATE, action) => {
  return { ...state, loading: false };
};
// _____________________________________________________________________

// Define Handlers
const HANDLERS = {
  [Types.FETCH_SEARCH_RESULTS_START]: fetchSearchResultsStart,
  [Types.FETCH_SEARCH_RESULTS_FAILURE]: fetchSearchResultsFailure,
  [Types.FETCH_SEARCH_RESULTS_SUCCESS]: fetchSearchResultsSuccess
};

// Create and Export Reducer
export const groupsReducer = createReducer(INITIAL_STATE, HANDLERS);
