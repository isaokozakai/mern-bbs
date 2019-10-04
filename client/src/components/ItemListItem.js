import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';
import moment from 'moment';

const ItemListItem = ({ id, title, postedAt, updatedAt }) => {
  return (
    <ListGroupItem>
      <Link to={`/detail/${id}`}>
        <h3>{title}</h3>
      </Link>
      <span>{moment(updatedAt ? updatedAt : postedAt).format('ll')}</span>
    </ListGroupItem>
  )
};

export default ItemListItem;