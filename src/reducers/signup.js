import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actions/signup';

const initialState = {
  isProcessing: false
}

const signup = (state = initialState, action) => {
  switch(action.type) {
    case SIGNUP_REQUEST:
      return {
        isProcessing: true
      };
    case SIGNUP_SUCCESS:
      return {
        isProcessing: false,
        success: true
      };
    case SIGNUP_FAILURE:
      return {
        isProcessing: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default signup;
