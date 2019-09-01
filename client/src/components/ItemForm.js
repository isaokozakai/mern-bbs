import React, { useState } from 'react';
import moment from 'moment';

const ItemForm = (props) => {
  const [title, setTitle] = useState(props.item ? props.item.title : '');
  const [text, setText] = useState(props.item ? props.item.text : '');
  const [date, setDate] = useState(props.item ? moment(props.item.date) : moment());
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !text) {
      setError('Please provide title and text');
    } else {
      setError('');
      props.onSubmit({
        title,
        text,
        date: date.valueOf()
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
        placeholder="Add a text"
        className="textares"
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
      </textarea>
      <div>
        <button className="button">Save Item</button>
      </div>
    </form>
  )
};

export default ItemForm;