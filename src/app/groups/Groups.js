import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Creators } from './store/actions';
import SearchInput from // , { createFilter }
'react-search-input';

class Groups extends Component {
  state = {
    searchText: ''
  };

  componentDidMount = () => {};

  componentDidUpdate = (prevProps, prevState) => {
    // console.log('prevState: ', prevState);
    // console.log('this.state: ', this.state);
    if (prevState.searchText !== this.state.searchText) {
      this.props.onFetchSearchResults(this.state.searchText);
    }
  };

  searchTextUpdated = searchText => {
    // console.log('e: ', e);
    this.setState({ searchText: searchText });
  };

  goToGroup = (url, id) => {
    // console.log('url: ', url);
    // console.log('this.props: ', this.props);
    this.props.history.push({
      pathname: 'gallery',
      state: { url: url, id: id }
    });
  };

  render() {
    const { groups } = this.props;
    return (
      <div className='Groups'>
        <div className='search'>
          <SearchInput
            className='search-input'
            onChange={this.searchTextUpdated}
          />
          {groups ? (
            <div className='search-results'>
              {groups.map(group => {
                return (
                  <div
                    className={`group-${group.id % 2}`}
                    key={group.id}
                    onClick={() => this.goToGroup(group.url, group.nsid)}
                  >
                    <div className='name'>{group.name}</div>
                    {/* <div className='subject'>{group.subject}</div> */}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state: ', state);
  return {
    groups: state.groups.groups
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchSearchResults: searchText =>
      dispatch(Creators.fetchSearchResults(searchText))
  };
};

// export default Groups;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Groups));
