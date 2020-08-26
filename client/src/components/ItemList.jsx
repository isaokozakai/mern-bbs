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
    return items.filter((item) => {
      return item.title.indexOf(text) >= 0 || item.description.indexOf(text) >= 0;
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
      <Container className="mb-4 px-md-5">
        <ListGroup>
          {items.map((item) => (
            <ItemListItem {...item} key={item._id} isAuthenticated={this.props.isAuthenticated} />
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