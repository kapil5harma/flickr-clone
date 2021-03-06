import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Groups from '../groups/Groups';
import Gallery from '../gallery/Gallery';

class MainPage extends Component {
  render() {
    return (
      <Switch>
        {/* <Route path='/overview' exact strict component={Home} /> */}
        <Route path='/groups' exact strict component={Groups} />
        <Route path='/gallery' exact strict component={Gallery} />

        <Redirect to='/groups' />
      </Switch>
    );
  }
}

export default MainPage;
