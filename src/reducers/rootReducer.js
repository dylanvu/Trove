import { combineReducers } from 'redux';
import signup from './signup';
import login from './login';

const rootReducer = combineReducers({
  signup,
  login
});

export default rootReducer;
