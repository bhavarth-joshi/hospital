import axios from 'axios';
import history from '../history';
import { GET_APPTS , GET_APPT , ADD_APPT , DELETE_APPT} from './types';
import { reset } from 'redux-form'; 

// GET APPTS
export const getAppts = () => async dispatch => {
  const res = await axios.get('/api/appts');
  dispatch({
    type: GET_APPTS,
    payload: res.data
  });
};

// GET APPT
export const getAppt = id => async dispatch => { // added
  const res = await axios.get(`/api/appts/${id}/`);
  dispatch({
    type: GET_APPT,
    payload: res.data
  });
};

// ADD APPTS
export const addAppt = formValues => async dispatch => {
  const res = await axios.post('/api/appts/', { ...formValues });
  dispatch({
    type: ADD_APPT,
    payload: res.data
  });
  dispatch(reset('apptForm'));
};

// DELETE APPT
export const deleteAppt = id => async dispatch => { // added
  await axios.delete(`/api/appts/${id}/`);
  dispatch({
    type: DELETE_APPT,
    payload: id
  });
  history.push('/');
}