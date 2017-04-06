import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Header, Icon, Menu, Modal } from 'semantic-ui-react';
import { addBookmark } from '../../actions/bookmarks';
import { selectList } from '../../actions/selectList';

class AddBookmark extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      listId: '',
      listName: '',
      isOpen: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
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

  handleSelectChange(event, { value, options }) {
    const listName = options.filter((list) => {
      return list.value === value
    })[0].text;

    this.setState({
      listId: value,
      listName
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addBookmark({
      url: this.state.url,
      listId: this.state.listId,
    });
    this.props.selectList({ name: this.state.listName, id: this.state.listId })
    this.setState({
      url: '',
      listId: '',
      listName: '',
      isOpen: false
    });
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
            <Icon name='add'/>
          </Menu.Item>
        }
      >
        <Header icon='bookmark' content='Add a bookmark' />
        <Modal.Content>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                name='url'
                placeholder='https://...'
                label='Add:'
                value={this.state.url}
                onChange={this.handleChange}
              />
              <Form.Select
                name='listId'
                placeholder='Select a list'
                label='To:'
                onChange={this.handleSelectChange}
                options={this.props.lists}
                value={this.state.listId}
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

const mapStateToProps = (state) => {
  const privateLists = state.lists.privateLists.map((list) => ({
    text: list.name,
    value: list.id,
  }));

  const sharedLists = state.lists.sharedLists.map((list) => ({
    text: list.name,
    value: list.id,
  }));

  return {
    lists: [
      {
        text: state.lists.defaultList.name,
        value: state.lists.defaultList.id
      },
      ...privateLists,
      ...sharedLists
    ]
  }
};

export default connect(
  mapStateToProps,
  { addBookmark, selectList }
)(AddBookmark);
