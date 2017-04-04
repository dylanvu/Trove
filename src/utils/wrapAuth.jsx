import React from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../actions/auth';

export default function wrapAuth(WrappedComponent) {
  class Auth extends React.Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.authenticateUser();
      }
    }

    render() {
      return (
        <WrappedComponent { ...this.props }/>
      );
    }
  }

  const mapStateToProps = (state) => ({ ...state.auth });

  return connect(
    mapStateToProps,
    { authenticateUser }
  )(Auth);
}
