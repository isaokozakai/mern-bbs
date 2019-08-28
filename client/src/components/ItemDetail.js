import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import { getItems } from '../actions/itemActions';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

const ItemDetail = (props) => {
  useEffect(() => {
    props.loadUser();
    props.getItems();
  }, []);

  if (props.item) {
    const { title, text, date } = props.item;

    return (
      <Container className="border">
        <Row>
          <Col>
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {moment(date).format('MMMM Do, YYYY')}
          </Col>
        </Row>
        <Row>
          <Col>{text}</Col>
        </Row>
      </Container>
    )
  } else {
    return (
      <Container />
    )
  }
};

const mapStateToProps = (state, props) => ({
  item: state.item.items.find((item) => item._id === props.match.params.id)
});

export default connect(mapStateToProps, { loadUser, getItems })(ItemDetail);
