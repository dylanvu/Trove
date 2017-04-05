import { fetchBookmarks } from './bookmarks';

export const SELECT_LIST = 'SELECT_LIST';

export const selectList = (list) => ({
  type: SELECT_LIST,
  list
});

export const fetchBmFromList = (list) => {
  return (dispatch) => {
    dispatch(selectList(list));
    dispatch(fetchBookmarks(list.id));
  };
};
