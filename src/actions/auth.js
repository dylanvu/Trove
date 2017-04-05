import axios from 'axios';
import { browserHistory } from 'react-router';
import { fetchLists } from './lists';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

const signupRequest = () => ({
  type: SIGNUP_REQUEST
});

const signupSuccess = () => ({
  type: SIGNUP_SUCCESS
});

const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  error
});

export const signupUser = (user) => {
  return (dispatch) => {
    dispatch(signupRequest());
    return axios.post('/api/register', user)
    .then((res) => {
      dispatch(signupSuccess());
      browserHistory.push('/login');
    })
    .catch((err) => {
      dispatch(signupFailure(err.response.data));
    });
  }
};


export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

const loginRequest = () => ({
  type: LOGIN_REQUEST
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error
});

const logout = () => ({
  type: LOGOUT
});

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch(loginRequest());
    return axios.post('/api/login', user)
      .then((res) => {
        dispatch(loginSuccess(res.data));
        dispatch(fetchLists());
        browserHistory.push('/dashboard');
      })
      .catch((err) => {
        dispatch(loginFailure(err.response.data));
      });
  }
};

export const logoutUser = () => {
  return (dispatch) => {
    return axios.delete('/api/logout')
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';

const authenticationRequest = () => ({
  type: AUTHENTICATION_REQUEST
});

const authenticationSuccess = (user) => ({
  type: AUTHENTICATION_SUCCESS,
  user
});

const authenticationFailure = (error) => ({
  type: AUTHENTICATION_FAILURE,
  error
});

export const authenticateUser = () => {
  return (dispatch, getState) => {
    authenticationRequest();
    return axios.get('/api/token')
      .then(({data}) => {
        dispatch(authenticationSuccess(data));
        dispatch(fetchLists());
        browserHistory.push('/dashboard');
      })
      .catch((err) => {
        dispatch(authenticationFailure(err));
        browserHistory.push('/login');
      });
  };
};
