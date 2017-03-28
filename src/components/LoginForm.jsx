import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state;
    const errors = {};

    if (!email.trim() || !email.includes('@')) {
      errors.email = 'Please enter a valid email.';
    }

    if (!password.trim()) {
      errors.password = 'Please enter your password.';
    }

    this.setState({ errors });
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <Form onSubmit={this.handleSubmit}>
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
          <Button type="submit">
            Log In
          </Button>
        </Form>
        <br></br>
        <Link to="/register">
          Create an account ›
        </Link>
      </div>
    );
  }
}

export default LoginForm;
