import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Creators } from './store/actions';
import SearchInput, { createFilter } from 'react-search-input';

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
                  <div className={`group-${group.id % 2}`} key={group.id}>
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
  console.log('state: ', state);
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
)(Groups);
