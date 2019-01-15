import React, { Component } from 'react';

const footerStyle = {
  background: '#343a40',
  color: '#fff',
  width: '100%',
  height: '6rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center'
};
class Footer extends Component {
  render() {
    return (
      <footer className='Footer' style={footerStyle}>
        <span>
          Copyright &copy; {new Date().getFullYear()} |{' '}
          <a
            href='https://www.kapil5harma.com/#/'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: '#ccc' }}
          >
            Kapil Sharma
          </a>
        </span>
        <br /> Powered by React & Redux
      </footer>
    );
  }
}

export default Footer;
