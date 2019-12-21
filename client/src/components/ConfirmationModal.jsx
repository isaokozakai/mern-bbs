import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from 'reactstrap';

const ConfirmationModal = (props) => (
  <>
    <Button color="danger" onClick={props.toggle}>Delete</Button>
    <Modal isOpen={props.modal} toggle={props.toggle} >
      <ModalHeader toggle={props.toggle}>Confirmation</ModalHeader>
      <ModalBody>
        Are you sure you want to delete this item?
        <Row className="mt-3">
          <Col sm={{ offset: 6 }}>
            <Button color="secondary" onClick={props.toggle} style={{ width: '100px' }} className="ml-3 mr-2">
              No
            </Button>
            <Button color="danger" onClick={props.onDelete} style={{ width: '100px' }}>
              Yes
            </Button>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  </>
)

export default ConfirmationModal;