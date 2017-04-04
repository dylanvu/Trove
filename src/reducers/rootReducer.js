import { combineReducers } from 'redux';
import auth from './auth';
import lists from './lists';
import selectedList from './selectedList';
import bookmarks from './bookmarks';

const rootReducer = combineReducers({
  auth,
  lists,
  selectedList,
  bookmarks
});

export default rootReducer;
