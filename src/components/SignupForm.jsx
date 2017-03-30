import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';
import { Link } from 'react-router';
import FormField from './FormField';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      confirmPassword
    } = this.state;

    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'Please enter your first name.';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Please enter your last name.';
    }

    if (!email.trim() || !email.includes('@')) {
      errors.email = 'Please enter a valid email.';
    }

    if (!password.trim() || password.length < 8) {
      errors.password = 'Your password must be at least 8 characters long.';
    }

    if (!confirmPassword.trim() || password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      this.props.userSignupRequest({
        firstName,
        lastName,
        email,
        password,
        confirmPassword
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
              attrValue="confirmPassword"
              error={this.state.errors.confirmPassword}
              onChange={this.handleChange}
              type="password"
              value={this.state.confirmPassword}
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

export default SignupForm;
