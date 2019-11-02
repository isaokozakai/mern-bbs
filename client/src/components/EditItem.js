import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap'
import ItemForm from './ItemForm';
import { getItem, editItem, deleteItem } from '../actions/itemActions';

const EditItem = (props) => {
  useEffect(() => {
    props.getItem(props.match.params.id);
  }, []);

  const onSubmit = (item) => {
    props.editItem(props.item._id, item);
    props.history.push('/');
  };

  if (props.item) {
    return (
      <>
        <Container className="px-md-5">
          <h1>Edit Item</h1>
        </Container>
        <ItemForm
          item={props.item}
          onSubmit={onSubmit}
        />
      </>
    );
  } else {
    return (
      <Container />
    )
  }
};

const mapStateToProps = (state) => ({
  item: state.item.item
});

export default connect(mapStateToProps, { getItem, editItem, deleteItem })(EditItem);