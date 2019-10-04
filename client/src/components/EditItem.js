import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap'
import ItemForm from './ItemForm';
import { loadUser } from '../actions/authActions'
import { getItem, editItem, deleteItem } from '../actions/itemActions'

const EditItem = (props) => {
  useEffect(() => {
    props.loadUser();
    props.getItem(props.match.params.id);
  }, []);

  const onSubmit = (item) => {
    props.editItem(props.item._id, item);
    props.history.push('/');
  };

  if (props.item) {
    return (
      <>
        <Container className="px-5">
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

export default connect(mapStateToProps, { loadUser, getItem, editItem, deleteItem })(EditItem);