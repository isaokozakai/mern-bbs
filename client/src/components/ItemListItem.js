import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, Button } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import { deleteItem } from '../actions/itemActions';
import moment from 'moment';

const ItemListItem = ({ id, title, date, isAuthenticated }) => {
  const onDeleteClick = () => {
    deleteItem(id);
  };

  return (
    <CSSTransition timeout={500} classNames="fade">
      <ListGroupItem>
        {
          isAuthenticated ?
            <Button
              className="remove-button"
              color="danger"
              size="sm"
              onClick={onDeleteClick}
            >
              Delete
        </Button>
            : null
        }
        <Link to={`/detail/${id}`}>
          <h3>{title}</h3>
          <span>{date}</span>
        </Link>
      </ListGroupItem>
    </CSSTransition>
  )
};

export default ItemListItem;