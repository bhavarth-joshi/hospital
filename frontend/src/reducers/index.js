import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appts from './appts';

export default combineReducers({
  form: formReducer,
  appts
});