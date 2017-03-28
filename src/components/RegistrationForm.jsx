import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class RegistrationForm extends React.Component {
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

    console.log(this.state);

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

    if (!password.trim() || password.length < 12) {
      errors.password = 'Your password must be at least 12 characters long.';
    }

    if (!confirmPassword.trim() || password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    this.setState({ errors });
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field error={!!this.state.errors.firstName}>
            <label htmlFor="firstName">First Name</label>
            <Input
              icon={!!this.state.errors.firstName ? "warning" : null}
              id="firstName"
              name="firstName"
              onChange={this.handleChange}
              placeholder="First Name"
              type="text"
              value={this.state.firstName}
            />
            <span>{this.state.errors.firstName}</span>
          </Form.Field>
          <Form.Field error={!!this.state.errors.lastName}>
            <label htmlFor="lastName">Last Name</label>
            <Input
              icon={!!this.state.errors.lastName ? "warning" : null}
              id="lastName"
              name="lastName"
              onChange={this.handleChange}
              placeholder="Last Name"
              type="text"
              value={this.state.lastName}
            />
            <span>{this.state.errors.lastName}</span>
          </Form.Field>
          <Form.Field error={!!this.state.errors.email}>
            <label htmlFor="email">Email</label>
            <Input
              icon={!!this.state.errors.email ? "warning" : null}
              id="email"
              name="email"
              onChange={this.handleChange}
              placeholder="Email"
              type="text"
              value={this.state.email}
            />
            <span>{this.state.errors.email}</span>
          </Form.Field>
          <Form.Field error={!!this.state.errors.password}>
            <label htmlFor="password">Password</label>
            <Input
              icon={!!this.state.errors.password ? "warning" : null}
              id="password"
              name="password"
              onChange={this.handleChange}
              placeholder="Password"
              type="password"
              value={this.state.password}
            />
            <span>{this.state.errors.password}</span>
          </Form.Field>
          <Form.Field error={!!this.state.errors.confirmPassword}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input
              icon={!!this.state.errors.confirmPassword ? "warning" : null}
              id="confirmPassword"
              name="confirmPassword"
              onChange={this.handleChange}
              placeholder="Confirm Password"
              type="password"
              value={this.state.confirmPassword}
            />
            <span>{this.state.errors.confirmPassword}</span>
          </Form.Field>
          <Button type="submit">
            Sign Up
          </Button>
        </Form>
        <br></br>
        <Link to="/login">
          Log in ›
        </Link>
      </div>
    );
  }
}

export default RegistrationForm;
