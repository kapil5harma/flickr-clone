import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchSearchResults: ['searchText'],
  fetchSearchResultsStart: null,
  fetchSearchResultsSuccess: ['groups'],
  fetchSearchResultsFailure: null
});

export { Types, Creators };
