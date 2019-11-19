import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import ItemForm from './ItemForm';
import { addItem } from '../actions/itemActions';
import moment from 'moment';

const AddItem = (props) => {
  const onSubmit = (item) => {
    item = { ...item, postedAt: moment(), user: props.user.id }
    props.addItem(item);
    props.history.push('/');
  };

  return (
    <>
      <Container className="px-md-5">
        <h1>Add Item</h1>
      </Container>
      <ItemForm onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps, { addItem })(AddItem);