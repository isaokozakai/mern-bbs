import React, { Component } from 'react';
import { Container, ListGroup } from 'reactstrap';
import { TransitionGroup } from 'react-transition-group';
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

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup>
            {items.map((item) => (
              <ItemListItem key={item._id} id={item._id} title={item.title} date={item.date} isAuthenticated={this.props.isAuthenticated} />
            ))}
          </TransitionGroup>
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