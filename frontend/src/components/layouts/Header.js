import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='ui secondary menu' style={{ borderRadius: '0' }}>
        <a className='header item'>Appointment</a>
        <a className='item'>Home</a>
      </div>
    );
  }
}

export default Header;