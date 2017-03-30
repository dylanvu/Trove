import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';
import { Link } from 'react-router';
import FormField from './FormField';

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
      errors.password = 'Please enter a valid password';
    }

    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      this.props.userLoginRequest({ email, password });
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
          <h1>Log In</h1>
          <Form onSubmit={this.handleSubmit}>
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
            <Button type="submit">
              Log In
            </Button>
          </Form>
          <br></br>
          <Link to="/signup">
            Don't have an account? Sign up ›
          </Link>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default LoginForm;
