import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ItemModal extends Component {
  state = {
    modal:false,
    title: '',
    text: ''
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  onTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  onTextChange = (e) => {
    this.setState({ text: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      title: this.state.title,
      text: this.state.text
    }

    this.props.addItem(newItem);

    this.toggle();
  }

  render() {
    return(
      <div>
        {
          this.props.isAuthenticated ? 
            <Button
              color="dark"
              style={{marginBottom: '2rem'}}
              onClick={this.toggle}
            >Add Item</Button>
            : <h4 className="mb-3 ml-4">Please log in to manage items</h4>
        }

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Add to Item List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder=""
                  onChange={this.onTitleChange}
                />
                <Label for="text">Text</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="text"
                  placeholder=""
                  onChange={this.onTextChange}
                />
                <Button color="dark" style={{marginTop: '2rem'}} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addItem })(ItemModal);