import {
  FETCH_LISTS_REQUEST,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAILURE
} from '../actions/lists';

const initialState = {
  isFetching: false,
  defaultList: {},
  privateLists: [],
  sharedLists: []
}

const list = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.lists
      }
    case FETCH_LISTS_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

export default list
