import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import { browserHistory, Link } from 'react-router';
import { loginUser } from '../actions/user';
import FormField from './FormField';
import validateLogin from '../utils/validateLogin';

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
    const { email, password } = this.state;
    const errors = validateLogin(this.state);
    const isValid = Object.keys(errors).length === 0;

    if (!isValid) {
      this.setState({ errors });
    }
    if (isValid) {
      this.props.loginUser({ email, password });
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
          { this.props.error && this.props.status === 'login'
            ? <Message negative>
                {this.props.error}
              </Message>
            : null
          }
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

const mapStateToProps = (state) => ({ ...state.user });

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
