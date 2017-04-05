import React from 'react';
import { Button, Header, Icon, Menu, Modal } from 'semantic-ui-react';
import AddBookmarkForm from './AddBookmarkForm';

const AddBookmark = () => (
  <Modal
    dimmer='blurring'
    size='small'
    closeIcon='close'
    trigger={
      <Menu.Item>
        <Icon name='add'/>
      </Menu.Item>
    }
  >
    <Header icon='bookmark' content='Add a bookmark' />
    <Modal.Content>
      <AddBookmarkForm/>
    </Modal.Content>
    <Modal.Actions>
      <Button color='purple'>
        <Icon name='checkmark' /> Save
      </Button>
    </Modal.Actions>
  </Modal>
);

export default AddBookmark
