import { combineReducers } from 'redux';
import { groupsReducer } from '../app/groups/store';

const rootReducer = combineReducers({
  groups: groupsReducer
});

export default rootReducer;
