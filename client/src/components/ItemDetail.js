import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import { getItem } from '../actions/itemActions';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

const ItemDetail = (props) => {
  useEffect(() => {
    props.loadUser();
    props.getItem(props.match.params.id);
  }, []);

  if (props.item) {
    const { _id, title, text, date } = props.item;

    return (
      <>
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
        <Container>
          <Link to={`/edit/${_id}`}>
            Edit
          </Link>
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

export default connect(mapStateToProps, { loadUser, getItem })(ItemDetail);
