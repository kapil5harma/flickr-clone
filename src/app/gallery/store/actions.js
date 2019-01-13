import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchPhotos: ['groupId'],
  fetchPhotosStart: null,
  fetchPhotosSuccess: ['photos'],
  fetchPhotosFailure: null
});

export { Types, Creators };
