import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const headerStyle = {
      background: '#343a40',
      color: '#fff',
      width: '100%',
      height: '100%',
      fontSize: '2.25rem'
    };

    return (
      <div className='Header' style={headerStyle}>
        <div className='heading'>
          <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
            Flickr Clone
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
