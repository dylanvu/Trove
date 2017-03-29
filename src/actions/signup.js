import axios from 'axios';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

const signupRequest = () => ({
  type: 'SIGNUP_REQUEST'
});

const signupSuccess = () => ({
  type: 'SIGNUP_SUCCESS'
});

const signupFailure = (err) => ({
  type: "SIGNUP_FAILURE",
  error: err
});

const userSignupRequest = (user) =>
  (dispatch) => {
    dispatch(signupRequest());
    return axios.post('/api/register', user)
      .then(({ data }) => {
        dispatch(signupSuccess(data));
      })
      .catch((err) => {
        dispatch(signupFailure(err));
      });
  };

export default userSignupRequest;
