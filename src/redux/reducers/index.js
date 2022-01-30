import { combineReducers } from 'redux';
import langState from './lang';
import userState from './user';

export default combineReducers({
  langState,
  userState,
});
