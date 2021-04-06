import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAppt } from '../../actions/appts';
import ApptForm from './ApptForm';

class ApptCreate extends Component {
  onSubmit = formValues => {
    this.props.addAppt(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <ApptForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addAppt }
)(ApptCreate);