import React from 'react';
import AppNavbar from './AppNavbar';
import ItemList from './ItemList';
import ItemModal from './ItemModal';
import { Container } from 'reactstrap'

const Dashboard = () => (
  <>
    <AppNavbar />
    <Container>
      <ItemModal />
      <ItemList />
    </Container>
  </>
);

export default Dashboard;