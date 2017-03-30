import { connect } from 'react-redux';
import userLoginRequest from '../actions/login';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state) => ({ ...state.login });

const LoginFormContainer = connect(
  mapStateToProps,
  { userLoginRequest }
)(LoginForm);

export default LoginFormContainer;
