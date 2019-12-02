import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';
import moment from 'moment';

const ItemListItem = ({ id, title, postedAt, updatedAt }) => {
  return (
    <ListGroupItem className="d-flex align-items-center px-3">
      <p className="mr-2 mb-0">{moment(updatedAt ? updatedAt : postedAt).format('MMM D')}</p>
      <Link to={`/detail/${id}`}>
        <h3 className="m-0">{title}</h3>
      </Link>
    </ListGroupItem>
  )
};

export default ItemListItem;