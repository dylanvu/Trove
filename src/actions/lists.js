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

export const ADD_LISTS_REQUEST = 'ADD_LISTS_REQUEST';
export const ADD_LISTS_SUCCESS = 'ADD_LISTS_SUCCESS';
export const ADD_LISTS_FAILURE = 'ADD_LISTS_FAILURE';

const addListsRequest = () => ({
  type: ADD_LISTS_REQUEST
});

const addListsSuccess = () => ({
  type: ADD_LISTS_SUCCESS
});

const addListsFailure = (err) => ({
  type: ADD_LISTS_FAILURE,
  err
});

export const addList = (list) => {
  return (dispatch) => {
    dispatch(addListsRequest());
    return axios.post('/api/lists', list)
      .then(() => {
        dispatch(addListsSuccess());
      })
      .then(() => {
        dispatch(fetchLists());
      })
      .catch((err) => {
        dispatch(addListsFailure(err))
      });
  }
};
