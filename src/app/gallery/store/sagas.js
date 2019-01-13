import axios from 'axios';
import { put } from 'redux-saga/effects';
import { Creators } from './actions';
import { apiEndpoints } from '../../../config/config';

// *************************** Fetch Photos Saga ***************************
export function* fetchGallerySaga(action) {
  // console.log('action: ', action);
  try {
    const groupId = action.groupId;
    yield put(Creators.fetchPhotosStart());
    const perPage = 20;
    const url = `${apiEndpoints.getPhotos}&api_key=${
      process.env.REACT_APP_FLICKR_KEY
    }&group_id=${groupId}&per_page=${perPage}&format=json&nojsoncallback=1`;
    // const url = `${apiEndpoints.search}&api_key=${
    //   process.env.REACT_APP_FLICKR_KEY
    // }&text=${groupId}&per_page=6&format=json&nojsoncallback=1`;
    const res = yield axios.post(url);
    // console.log('res: ', res);
    const photos = [];
    for (let key in res.data.photos.photo) {
      photos.push({
        id: key,
        ...res.data.photos.photo[key]
      });
    }
    // photos.map(photo => {
    //   let photoId = photo.nsid;
    //   const urlFor = `${
    //     apiEndpoints.getphotoURL
    //   }&api_key=bda33e70c77f4ff7d44d07a41c8e9fca&photo_id=${photoId}&format=json&nojsoncallback=1`;

    //   const res2 = axios.get(urlFor).then(data => {
    //     // console.log('data: ', data);
    //     photos.forEach(photo => {
    //       if (photo.nsid === data.data.photo.nsid) {
    //         // console.log('photo: ', photo);
    //         photos[photo.id].url = data.data.photo.url;
    //       }
    //     });
    //   });
    // });
    // console.log('photos: ', photos);
    yield put(Creators.fetchPhotosSuccess(photos));
  } catch (err) {
    yield put(Creators.fetchPhotosFailure(err));
  }
}
// __________________________________________________________________________
