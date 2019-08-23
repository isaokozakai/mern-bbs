import React from 'react';
import ItemList from './ItemList';
import ItemModal from './ItemModal';
import { Container } from 'reactstrap'

const Dashboard = () => (
  <Container>
    <ItemModal />
    <ItemList />
  </Container>
);

export default Dashboard;