import { combineReducers } from 'redux';
import user from './user';
import lists from './lists';

const rootReducer = combineReducers({
  user,
  lists
});

export default rootReducer;
