import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { addItem } from '../actions/itemActions';

const AddItem = (props) => {
  const onSubmit = (item) => {
    props.addItem(item);
    props.history.push('/');
  };

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1>Add Item</h1>
        </div>
      </div>
      <div>
        <ItemForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default connect(undefined, { addItem })(AddItem);