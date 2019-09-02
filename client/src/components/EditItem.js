import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap'
import ItemForm from './ItemForm';
import ConfirmationModal from './ConfirmationModal'
import { loadUser } from '../actions/authActions'
import { getItem, editItem, deleteItem } from '../actions/itemActions'

const EditItem = (props) => {
  useEffect(() => {
    props.loadUser();
    props.getItem(props.match.params.id);
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSubmit = (item) => {
    props.editItem(props.item._id, item);
    props.history.push('/');
  };

  const onDelete = () => {
    props.deleteItem({ id: props.item._id });
    setModalIsOpen(false);
    props.history.push('/');
  };
  if (props.item) {
    return (
      <>
        <div className="page-header">
          <Container>
            <h1>Edit Item</h1>
          </Container>
        </div>
        <Container>
          <ItemForm
            item={props.item}
            onSubmit={onSubmit}
          />
          <button className="button button--secondary" onClick={(e) => setModalIsOpen(true)}>Delete Item</button>
        </Container>
        <ConfirmationModal modalIsOpen={modalIsOpen} closeModal={(e) => setModalIsOpen(false)} onDelete={onDelete} />
      </>
    );
  } else {
    return (
      <Container />
    )
  }
};

const mapStateToProps = (state, props) => ({
  item: state.item.item
});

export default connect(mapStateToProps, { loadUser, getItem, editItem, deleteItem })(EditItem);