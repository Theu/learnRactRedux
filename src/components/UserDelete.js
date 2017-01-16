import React from 'react'
import { Modal, Button } from 'react-bootstrap';

export default class UserDelete extends React.Component {
  render() {
    return(
      <Modal>
        <Modal.Header>
          <Modal.Title>
            Are you sure you want to delete <strong>this user</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button>No</Button>
          <Button bsStyle="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
