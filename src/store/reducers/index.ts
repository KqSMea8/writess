import { combineReducers } from 'redux';
import page from './page/reducer';
import entity from './entity/reducer';
import document from './document/reducer';
import user from './user/reducer';

export default combineReducers({
  page,
  entity,
  document,
  user,
});
