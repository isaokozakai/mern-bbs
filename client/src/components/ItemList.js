import React, { Component } from 'react';
import { Container, ListGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import ItemListItem from './ItemListItem';
import PropTypes from 'prop-types';

class ItemList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  }
  
  componentDidMount() {
    this.props.getItems();
  }

  filterItems = (items) => {
    let text = sessionStorage.getItem('text');
    if (text == null) {
      text = this.props.text;
    }
    const regex = new RegExp(text, 'i');
    return items.filter((item) => {
      return item.title.match(regex) || item.description.match(regex);
    })
  }

  render() {
    let { items } = this.props.item;
    items = this.filterItems(items).sort((a, b) => {
      const dateA = a.updatedAt ? a.updatedAt : a.postedAt;
      const dateB = b.updatedAt ? b.updatedAt : b.postedAt;
      return dateA < dateB ? 1 : -1;
    });

    return (
      <Container>
        <ListGroup>
          {items.map((item) => (
            <ItemListItem key={item._id} id={item._id} title={item.title} postedAt={item.postedAt} updatedAt={item.updatedAt} isAuthenticated={this.props.isAuthenticated} />
          ))}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getItems })(ItemList);