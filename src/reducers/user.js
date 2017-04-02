import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  AUTHENTICATE,
  AUTHENTICATE_FAILURE
} from '../actions/user';

const initialState = {
  user: null,
  status: null,
  error: null,
  loading: false,
  authenticated: false
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        user: null,
        status: 'signup',
        error: null,
        loading: true,
        authenticated: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: null,
        status: 'signup',
        error: null,
        loading: false,
        authenticated: false
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        user: null,
        status: 'signup',
        error: action.error,
        loading: false,
        authenticated: false
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        user: null,
        status: 'login',
        error: null,
        loading: true,
        authenticated: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        status: 'login',
        error: null,
        loading: false,
        authenticated: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        status: 'login',
        error: action.error,
        loading: false,
        authenticated: false
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        status: 'logout',
        error: null,
        loading: false,
        authenticated: false
      };
    case AUTHENTICATE:
      return {
        ...state,
        user: action.user,
        status: 'authenticate',
        error: null,
        loading: false,
        authenticated: true
      };
    case AUTHENTICATE_FAILURE:
      return {
        ...state,
        user: null,
        status: 'authenticate',
        error: action.error,
        loading: false,
        authenticated: false
      };
    default:
      return state;
  }
};

export default user;
