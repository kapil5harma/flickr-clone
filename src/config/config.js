export const rootConfig = {
  apiRoot: `https://api.flickr.com/services/rest/?method=`
};

export const apiEndpoints = {
  search: `${rootConfig.apiRoot}flickr.groups.search`,
  groupsBrowse: `${rootConfig.apiRoot}browse`,
  gallery: `${rootConfig.apiRoot}pools.getPhotos`,
  getGroupURL: `${rootConfig.apiRoot}flickr.urls.getGroup`,
  getPhotos: `${rootConfig.apiRoot}flickr.groups.pools.getPhotos`,
  photoOverview: `${rootConfig.apiRoot}flickr.groups.pools.getPhotos`
};
