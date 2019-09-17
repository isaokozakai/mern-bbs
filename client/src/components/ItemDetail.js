import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import { getItem, deleteItem } from '../actions/itemActions';
import { Button, Container, Row, Col } from 'reactstrap';
import moment from 'moment';

const ItemDetail = (props) => {
  useEffect(() => {
    props.loadUser();
    props.getItem(props.match.params.id);
  }, []);

  const onDeleteClick = () => {
    deleteItem(props.item._id);
  };

  if (props.item) {
    const { _id, title, description, postedAt, updatedAt } = props.item;

    return (
      <>
        <Container>
          <Container className="border rounded mb-2">
            <Row>
              <Col>
                <h1>{title}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                posted: {moment(postedAt).format('MMM Do, YYYY')}
              </Col>
              {
                updatedAt ?
                  <Col>
                    updated: {moment(updatedAt).format('MMM Do, YYYY')}
                  </Col> : null
              }
            </Row>
            <Row>
              <Col>{description}</Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <Link to={`/edit/${_id}`} className="mr-2">
            <Button color="success">
              Edit
            </Button>
          </Link>
          <Button color="danger" onClick={onDeleteClick}>
            Delete
          </Button>
        </Container>
      </>
    )
  } else {
    return (
      <Container />
    )
  }
};

const mapStateToProps = (state) => ({
  item: state.item.item
});

export default connect(mapStateToProps, { loadUser, getItem, deleteItem })(ItemDetail);
