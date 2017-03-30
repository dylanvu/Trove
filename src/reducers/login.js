import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/login';

const initialState = {
  isProcessing: false,
  authenticated: false
};

const login = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isProcessing: true
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isProcessing: false,
        authenticated: true,
        user: action.user
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isProcessing: false,
        error: action.error
      });
    default:
      return state;
  }
};

export default login;
