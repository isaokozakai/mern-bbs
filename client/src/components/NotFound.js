import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

const NotFound = () => (
  <Container>
    404 - <Link to="/">Go home</Link>
  </Container>
);

export default NotFound;