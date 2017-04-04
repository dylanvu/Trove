import {
  FETCH_BOOKMARKS_REQUEST,
  FETCH_BOOKMARKS_SUCCESS,
  FETCH_BOOKMARKS_FAILURE
} from '../actions/bookmarks';

const initialState = {
  isFetching: false,
  data: []
}

const bookmarks = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKMARKS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_BOOKMARKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.bookmarks
      }
    case FETCH_BOOKMARKS_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

export default bookmarks;
