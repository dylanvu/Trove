import React from 'react';
import { connect } from 'react-redux';
import { browserHistory} from 'react-router';
import { authenticateUser } from '../actions/user';

export default function wrapAuth(WrappedComponent) {
  class Auth extends React.Component {

    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/login');
      }
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/login');
      }
    }

    render() {
      return (
        <WrappedComponent { ...this.props }/>
      );
    }
  }

  const mapStateToProps = (state) => ({ ...state.user });

  return connect(
    mapStateToProps,
    { authenticateUser }
  )(Auth);
}
