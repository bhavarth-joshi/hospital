import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { getAppts , deleteAppt } from '../../actions/appts';

class ApptList extends Component {
  componentDidMount() {
    this.props.getAppts();
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.appts.map(appt => (
          <div className='item' key={appt.id}>
            <div className='right floated content'>
              <Link
                to={`/delete/${appt.id}`}
                className='small ui negative basic button'
              >
                Delete
              </Link>
            </div>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <a className='header'>{appt.task}</a>
              <div className='description'>{appt.created_at}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appt: Object.values(state.appt)
});

export default connect(
  mapStateToProps,
  { getAppts , deleteAppt }
)(ApptList);