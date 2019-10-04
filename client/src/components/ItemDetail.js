import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ConfirmationModal from './ConfirmationModal'
import { getItem, deleteItem } from '../actions/itemActions';
import { Button, Container, Row, Col } from 'reactstrap';
import moment from 'moment';

const ItemDetail = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    props.getItem(props.match.params.id);
  }, []);

  const onDelete = (e) => {
    props.deleteItem(props.item._id);
    toggle();
    props.history.push('/');
  }

  if (props.item) {
    const { _id, title, description, postedAt, updatedAt } = props.item;

    return (
      <>
        <Container className="px-5 mb-2">
          <Row>
            <Col>
              <h1>{title}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex">
              <p className="mr-5">
                posted: {moment(postedAt).format('ll')}
              </p>
              {
                updatedAt ?
                  <p>
                    updated: {moment(updatedAt).format('ll')}
                  </p>
                  : null
              }
            </Col>
          </Row>
          <Row>
            <Col><pre style={{ fontSize: '20px' }}>{description}</pre></Col>
          </Row>
        </Container>
        {
          props.isAuthenticated ? (
            <Container className="px-5">
              <Button tag={Link} to={`/edit/${_id}`} color="success" className="mr-2">
                Edit
              </Button>
              <ConfirmationModal onDelete={onDelete} modal={modal} toggle={toggle} />
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
