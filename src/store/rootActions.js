import {
  Types as groupsActionTypes,
  Creators as groupsActionCreators
} from '../app/groups/store';
import {
  Types as photosActionTypes,
  Creators as photosActionCreators
} from '../app/gallery/store';

const Types = {
  ...groupsActionTypes,
  ...photosActionTypes
};

const Creators = {
  ...groupsActionCreators,
  ...photosActionCreators
};

export { Types, Creators };
