import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = {
  loading: false,
  photos: null
};

// *************************** Fetch Photos ****************************
const fetchPhotosStart = (state = INITIAL_STATE, action) => {
  return { ...state, loading: true };
};

const fetchPhotosSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, photos: action.photos, loading: false };
};

const fetchPhotosFailure = (state = INITIAL_STATE, action) => {
  return { ...state, loading: false };
};
// _____________________________________________________________________

// Define Handlers
const HANDLERS = {
  [Types.FETCH_PHOTOS_START]: fetchPhotosStart,
  [Types.FETCH_PHOTOS_FAILURE]: fetchPhotosFailure,
  [Types.FETCH_PHOTOS_SUCCESS]: fetchPhotosSuccess
};

// Create and Export Reducer
export const galleryReducer = createReducer(INITIAL_STATE, HANDLERS);
