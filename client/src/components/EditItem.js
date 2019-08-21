import React, { useState } from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import ConfirmationModal from './ConfirmationModal'
import { editItem, deleteItem } from '../actions/itemActions'

const EditItem = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSubmit = (item) => {
    props.editItem(props.item.id, item);
    props.history.push('/');
  };

  const onDelete = () => {
    props.deleteItem({ id: props.item.id });
    setModalIsOpen(false);
    props.history.push('/');
  };

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1>Edit Item</h1>
        </div>
      </div>
      <div className="content-container">
        <ItemForm
          item={props.item}
          onSubmit={onSubmit}
        />
        <button className="button button--secondary" onClick={(e) => setModalIsOpen(true)}>Delete Item</button>
      </div>
      <ConfirmationModal modalIsOpen={this.state.modalIsOpen} closeModal={(e) => setModalIsOpen(false)} onDelete={onDelete} />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  item: state.items.find((item) => item.id === props.match.params.id)
});

export default connect(mapStateToProps, { editItem, deleteItem })(EditItem);