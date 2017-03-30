import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const loginRequest = () => ({
  type: 'LOGIN_REQUEST'
});

const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  user
});

const loginFailure = (err) => ({
  type: "LOGIN_FAILURE",
  error: err
});

const userLoginRequest = (user) =>
  (dispatch) => {
    dispatch(loginRequest());
    return axios.post('/api/login', user)
      .then(({ data }) => {
        dispatch(loginSuccess(data));
      })
      .catch((err) => {
        dispatch(loginFailure(err));
      });
  };

export default userLoginRequest;
