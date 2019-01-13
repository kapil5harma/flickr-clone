import { combineReducers } from 'redux';
import { groupsReducer } from '../app/groups/store';
import { galleryReducer } from '../app/gallery/store';

const rootReducer = combineReducers({
  groups: groupsReducer,
  photos: galleryReducer
});

export default rootReducer;
