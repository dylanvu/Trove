import axios from 'axios';

export const FETCH_BOOKMARKS_REQUEST = 'FETCH_BOOKMARKS_REQUEST';
export const FETCH_BOOKMARKS_SUCCESS = 'FETCH_BOOKMARKS_SUCCESS';
export const FETCH_BOOKMARKS_FAILURE = 'FETCH_BOOKMARKS_FAILURE';

const fetchBookmarksRequest = () => ({
  type: FETCH_BOOKMARKS_REQUEST
});

const fetchBookmarksSuccess = (bookmarks) => ({
  type: FETCH_BOOKMARKS_SUCCESS,
  bookmarks
});

const fetchBookmarksFailure = () => ({
  type: FETCH_BOOKMARKS_FAILURE
});

export const fetchBookmarks = (listId) => {
  return (dispatch) => {
    dispatch(fetchBookmarksRequest());
    return axios(`/api/bookmarks/${listId}`)
      .then(({ data }) => {
        dispatch(fetchBookmarksSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchBookmarksFailure());
      });
  };
};
