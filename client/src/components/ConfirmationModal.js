import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

const ConfirmationModal = (props) => (
  <>
    <Button onClick={props.toggle}>Delete Item</Button>
    <Modal isOpen={props.modal} toggle={props.toggle} >
      <ModalHeader toggle={props.toggle}>Confirmation</ModalHeader>
      <ModalBody>
        Are you sure you want to delete this item?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={props.toggle} style={{ width: '100px' }} >
          No
        </Button>
        <Button color="danger" onClick={props.onDelete} style={{ width: '100px' }}>
          Yes
        </Button>
      </ModalFooter>
    </Modal>
  </>
)

export default ConfirmationModal;