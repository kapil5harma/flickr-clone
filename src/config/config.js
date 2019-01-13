export const rootConfig = {
  // apiRoot: `https://www.flickr.com/services/api/explore/flickr.groups.`
  apiRoot: `https://api.flickr.com/services/rest/?method=`
};

export const apiEndpoints = {
  search: `${rootConfig.apiRoot}flickr.groups.search`,
  groupsBrowse: `${rootConfig.apiRoot}browse`,
  gallery: `${rootConfig.apiRoot}pools.getPhotos`
};
