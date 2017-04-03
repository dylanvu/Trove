import axios from 'axios';
import { browserHistory } from 'react-router';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

function signupRequest() {
  return {
    type: SIGNUP_REQUEST
  };
}

function signupSuccess() {
  return {
    type: SIGNUP_SUCCESS
  };
}

function signupFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    error
  };
}

export function signupUser(user) {
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
  };
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

export function loginUser(user) {
  return (dispatch) => {
    dispatch(loginRequest());
    return axios.post('/api/login', user)
      .then((res) => {
        dispatch(loginSuccess(res.data));
        browserHistory.push('/dashboard');
      })
      .catch((err) => {
        dispatch(loginFailure(err.response.data));
      });
  };
}

export function logoutUser() {
  return dispatch => {
    return axios.delete('/api/logout')
      .then(() => {
        dispatch(logout());
        browserHistory.push('/');
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';

function authenticate(user) {
  return {
    type: AUTHENTICATE,
    user
  };
}

function authenticateFailure(error) {
  return {
    type: AUTHENTICATE_FAILURE,
    error
  };
}

export function authenticateUser() {
  return (dispatch) => {
    return axios.get('/api/token')
    .then((res) => {
      dispatch(authenticate(res.data));
    })
    .catch((err) => {
      dispatch(authenticateFailure(err.response.data));
    });
  };
}
