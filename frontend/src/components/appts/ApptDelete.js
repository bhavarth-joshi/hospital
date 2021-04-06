import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../layouts/Modal';
import history from '../../history';
import { getAppt, deleteAppt } from '../../actions/appts';

class ApptDelete extends Component {
  componentDidMount() {
    this.props.getAppt(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.appt) {
      return 'Are you sure you want to delete this appointment?';
    }
    return `Are you sure you want to delete the appointment: ${this.props.appt.appointment}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteAppt(id)}
          className='ui negative button'
        >
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title='Delete Appointment'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  appt: state.appt[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { getAppt, deleteAppt }
)(ApptDelete);