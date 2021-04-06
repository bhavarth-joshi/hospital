import React, { Component } from 'react';
import ApptCreate from './ApptCreate'
import ApptList from './ApptList';

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Appt Create Form</div>
        <ApptCreate />
        <ApptList />
      </div>
    );
  }
}

export default Dashboard;