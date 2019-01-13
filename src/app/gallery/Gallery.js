import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Creators } from './store/actions';

const createImageUrl = (farmId, serverId, id, secret) => {
  const url = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
  // console.log('url: ', url);
  return url;
};

class Gallery extends Component {
  componentDidMount = () => {
    // console.log('this.props: ', this.props);
    this.props.onFetchPhotos(this.props.location.state.id);
  };

  render() {
    // console.log(this.props.photos);
    const { photos } = this.props;
    return (
      <div className='Gallery'>
        {photos &&
          photos.map((photo, index) => {
            // console.log('photo: ', photo);
            const imgUrl = createImageUrl(
              photo.farm,
              photo.server,
              photo.id,
              photo.secret
            );

            return (
              <div className='Card' key={`${photo.title}-${index}`}>
                <img src={imgUrl} alt='img' />
                <div className='info'>
                  <span className='left'>
                    <span className='title'>{photo.title}</span>
                    <span className='owner'>by {photo.ownername}</span>
                  </span>
                  <span className='date'>
                    {Date(photo.dateadded).substr(4, 11)}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state: ', state);
  return {
    photos: state.photos.photos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPhotos: groupId => dispatch(Creators.fetchPhotos(groupId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Gallery));
