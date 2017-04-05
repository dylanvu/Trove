import axios from 'axios';

export const FETCH_LISTS_REQUEST = 'FETCH_LISTS_REQUEST';
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';
export const FETCH_LISTS_FAILURE = 'FETCH_LISTS_FAILURE';

const fetchListsRequest = () => ({
  type: FETCH_LISTS_REQUEST
});

const fetchListsSuccess = (lists) => ({
  type: FETCH_LISTS_SUCCESS,
  lists
});

const fetchListsFailure = () => ({
  type: FETCH_LISTS_FAILURE
});

export const fetchLists = () => {
  return (dispatch) => {
    dispatch(fetchListsRequest());
    return axios.get('/api/lists')
      .then(({ data }) => {
        dispatch(fetchListsSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchListsFailure());
      });
  };
};
