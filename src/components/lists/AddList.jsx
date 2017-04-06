import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Form,
  Header,
  Icon,
  Menu,
  Modal
} from 'semantic-ui-react';
import { addList } from '../../actions/lists';

class AddList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      isOpen: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addList(this.state);
    this.setState({
      name: '',
      isOpen: false
    })
  }

  render() {
    return (
      <Modal
        open={this.state.isOpen}
        dimmer='blurring'
        size='small'
        onClose={this.handleClick}
        closeIcon='close'
        trigger={
          <Menu.Item onClick={this.handleClick}>
            <Button>New list</Button>
          </Menu.Item>
        }
      >
        <Header icon='write' content='Create a new list' />
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                name='name'
                placeholder='New list name'
                label='List name:'
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='purple' onClick={this.handleSubmit}>
            <Icon name='checkmark' /> Save
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect(
  null,
  { addList }
)(AddList);
