import React, { useState } from 'react';
import { Container, Button, Input, Form } from 'reactstrap';
import moment from 'moment';

const ItemForm = (props) => {
  const [title, setTitle] = useState(props.item ? props.item.title : '');
  const [description, setDescription] = useState(props.item ? props.item.description : '');
  const [updatedAt] = useState(props.item ? moment() : '');
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError('Please provide title and description');
    } else {
      setError('');
      props.onSubmit({
        title,
        description,
        updatedAt: updatedAt.valueOf()
      })
    }
  };

  return (
    <Container className="px-5">
      <Form onSubmit={onSubmit}>
        {error && <p className="text-danger">{error}</p>}
        <Input
          type="text"
          placeholder="title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-100 mb-2"
        />
        <Input
          placeholder="description"
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-100 mb-3"
          rows="10"
        />
        <Button color="secondary">Save Item</Button>
      </Form>
    </Container>
  )
};

export default ItemForm;