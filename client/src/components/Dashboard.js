import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import { Container, InputGroup, InputGroupAddon, InputGroupText, Input, Button, Row, Col } from 'reactstrap';

const Dashboard = (props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    document.getElementById("search").value = sessionStorage.getItem('text');
  }, []);

  const onSearchClick = () => {
    const input = document.getElementById("search").value;
    setText(input);
    sessionStorage.setItem('text', input);
  };
  return (
    <>
      <Container className="mb-3 px-5" >
        <Row>
          <Col sm="6">
            <InputGroup>
              <Input id="search" placeholder="search" />
              <InputGroupAddon addonType="append" onClick={onSearchClick}>
                <InputGroupText><i className="fas fa-search"></i></InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          {
            props.isAuthenticated ?
              <Col className="d-flex justify-content-end">
                <Button tag={Link} to="/create">
                  Add Item
                </Button>
              </Col>
              : null
          }
        </Row>
      </Container>
      <ItemList text={text} />
    </>
  )
};

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Dashboard);