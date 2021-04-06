import _ from 'lodash';
import { GET_APPTS, ADD_APPT , GET_APPT , DELETE_APPT } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_APPTS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case GET_APPT:
    case ADD_APPT:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_APPT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};