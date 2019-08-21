import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


const ItemContent = (props) => {
  const { title, text, date } = props.item;
  return (
    <div>
      {title}
      {text}
      {moment(date).format('MMMM Do, YYYY')}
    </div>
  )
};

const mapStateToProps = (state, props) => ({
  item: state.item.items.find((item) => item._id === props.match.params.id)
});

export default connect(mapStateToProps)(ItemContent);
