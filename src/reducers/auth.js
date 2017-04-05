import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE
} from '../actions/auth';

const initialState = {
  user: null,
  status: null,
  error: null,
  loading: false,
  authenticated: false
};

const auth = (state = initialState, action) => {
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
    case AUTHENTICATION_REQUEST:
      return {
        ...state,
        user: null,
        status: 'authentication',
        error: null,
        loading: true,
        authenticated: false
      };
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        user: action.user,
        status: 'authentication',
        error: null,
        loading: false,
        authenticated: true
      };
    case AUTHENTICATION_FAILURE:
      return {
        ...state,
        user: null,
        status: 'authentication',
        error: action.error,
        loading: false,
        authenticated: false
      };
    default:
      return state;
  }
};

export default auth;
