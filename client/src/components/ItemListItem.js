import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';
import { deleteItem } from '../actions/itemActions';
import moment from 'moment';

const ItemListItem = ({ id, title, date}) => {
  const onDeleteClick = () => {
    deleteItem(id);
  };

  return (
    <ListGroupItem>
      <Link to={`/detail/${id}`}>
        <h3>{title}</h3>
      </Link>
      <span>{moment(date).format('MMMM Do, YYYY')}</span>
    </ListGroupItem>
  )
};

export default ItemListItem;