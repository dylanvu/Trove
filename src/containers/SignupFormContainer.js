import { connect } from 'react-redux';
import userSignupRequest from '../actions/signup';
import SignupForm from '../components/SignupForm';

const mapStateToProps = (state) => ({ ...state.signup });

const SignupFormContainer = connect(
  mapStateToProps,
  { userSignupRequest }
)(SignupForm);

export default SignupFormContainer;
