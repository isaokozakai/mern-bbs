import React, { useState } from 'react';
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
    <form className="form" onSubmit={onSubmit}>
      {error && <p className="form__error">{error}</p>}
      <input
        type="text"
        placeholder="Title"
        autoFocus
        className="text-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/>
      <textarea
        placeholder="Add a description"
        className="textares"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      >
      </textarea>
      <div>
        <button className="button">Save Item</button>
      </div>
    </form>
  )
};

export default ItemForm;