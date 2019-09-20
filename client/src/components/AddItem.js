import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import ItemForm from './ItemForm';
import { loadUser } from '../actions/authActions';
import { addItem } from '../actions/itemActions';
import moment from 'moment';

const AddItem = (props) => {
  useEffect(() => {
    props.loadUser();
  }, []);

  const onSubmit = (item) => {
    item = { ...item, createdAt: moment(), user: props.user._id }
    props.addItem(item);
    props.history.push('/');
  };

  return (
    <>
      <Container>
        <h1>Add Item</h1>
      </Container>
      <Container>
        <ItemForm onSubmit={onSubmit} />
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps, { loadUser, addItem })(AddItem);