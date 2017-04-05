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
    return axios.get(`/api/bookmarks/${listId}`)
      .then(({ data }) => {
        dispatch(fetchBookmarksSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchBookmarksFailure());
      });
  };
};

export const ADD_BOOKMARK_SUCCESS = 'ADD_BOOKMARK_SUCCESS';
export const ADD_BOOKMARK_FAILURE = 'ADD_BOOKMARK_FAILURE';

const addBookmarkSuccess = () => ({
  type: ADD_BOOKMARK_SUCCESS,
  message: 'Bookmark added'
});

const addBookmarkFailure = (error) => ({
  type: ADD_BOOKMARK_FAILURE,
  error
});

export const addBookmark = (bookmark) => {
  return (dispatch) => {
    return axios.post('/api/bookmarks', bookmark)
      .then(({data}) => {
        dispatch(addBookmarkSuccess());
      })
      .then(() => {
        dispatch(fetchBookmarks(bookmark.listId));
      })
      .catch((err) => {
        dispatch(addBookmarkFailure(err));
      })
  }
}
