import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import ItemForm from './ItemForm';
import { addItem } from '../actions/itemActions';

const AddItem = (props) => {
  const onSubmit = (item) => {
    props.addItem(item);
    props.history.push('/');
  };

  return (
    <>
      <div className="page-header">
        <Container>
          <h1>Add Item</h1>
        </Container>
      </div>
      <Container>
        <ItemForm onSubmit={onSubmit} />
      </Container>
    </>
  );
}

export default connect(undefined, { addItem })(AddItem);