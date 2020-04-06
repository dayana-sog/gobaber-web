import { combineReducers } from 'redux';

import auth from './auth/reduce';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
});
