import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItem, deleteItem } from '../actions/itemActions';
import { Button, Container, Row, Col } from 'reactstrap';
import moment from 'moment';

const ItemDetail = (props) => {
  useEffect(() => {
    props.getItem(props.match.params.id);
  }, []);

  const onDeleteClick = () => {
    props.deleteItem(props.item._id);
    props.history.push('/');
  };

  if (props.item) {
    const { _id, title, description, postedAt, updatedAt, user } = props.item;

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
        {
          props.isAuthenticated ? (
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
          ) : null
        }
      </>
    )
  } else {
    return (
      <Container />
    )
  }
};

const mapStateToProps = (state) => ({
  item: state.item.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getItem, deleteItem })(ItemDetail);
