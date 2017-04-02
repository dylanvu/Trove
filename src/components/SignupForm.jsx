import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/user';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import { browserHistory, Link } from 'react-router';
import FormField from './FormField';
import validateSignup from '../utils/validateSignup';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.authenticated) {
      browserHistory.push('/dashboard');
    }
  }

  handleChange(event) {
    if (!!this.state.errors[event.target.name]) {
      const errors = Object.assign({}, this.state.errors);
      delete errors[event.target.name];

      this.setState({
        [event.target.name]: event.target.value,
        errors
      });
    }
    else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation
    } = this.state;
    const errors = validateSignup(this.state);
    const isValid = Object.keys(errors).length === 0;

    if (!isValid) {
      this.setState({ errors });
    }
    else {
      this.props.signupUser({
        firstName,
        lastName,
        email,
        password,
        passwordConfirmation
      });
    }
  }

  render() {
    return (
      <Grid.Row centered={true}>
        <Grid.Column
          computer={4}
          tablet={6}
          mobile={12}
          textAlign="center"
        >
          <h1>Sign Up</h1>
          { this.props.error && this.props.status === 'signup'
            ? <Message negative>
                {this.props.error}
              </Message>
            : null
          }
          <Form onSubmit={this.handleSubmit}>
            <FormField
              attrValue="firstName"
              error={this.state.errors.firstName}
              onChange={this.handleChange}
              type="text"
              value={this.state.firstName}
            >
              First Name
            </FormField>
            <FormField
              attrValue="lastName"
              error={this.state.errors.lastName}
              onChange={this.handleChange}
              type="text"
              value={this.state.lastName}
            >
              Last Name
            </FormField>
            <FormField
              attrValue="email"
              error={this.state.errors.email}
              onChange={this.handleChange}
              type="text"
              value={this.state.email}
            >
              Email
            </FormField>
            <FormField
              attrValue="password"
              error={this.state.errors.password}
              onChange={this.handleChange}
              type="password"
              value={this.state.password}
            >
              Password
            </FormField>
            <FormField
              attrValue="passwordConfirmation"
              error={this.state.errors.passwordConfirmation}
              onChange={this.handleChange}
              type="password"
              value={this.state.passwordConfirmation}
            >
              Confirm Password
            </FormField>
            <Button type="submit">
              Sign Up
            </Button>
          </Form>
          <br></br>
          <Link to="/login">
            Already have an account? Log in ›
          </Link>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.user });

export default connect(
  mapStateToProps,
  { signupUser }
)(SignupForm);
