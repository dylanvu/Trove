import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

class AddBookmarkForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarkUrl: '',
      listId: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSelectChange(event, { name, value }) {
    this.setState({
      listId: value
    });
  }

  handleSubmit() {
    
  }

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input
            name='bookmarkUrl'
            placeholder='https://...'
            label='Add:'
            value={this.state.bookmarkUrl}
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
  mapStateToProps
)(AddBookmarkForm);
