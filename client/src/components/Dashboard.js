import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import { Container } from 'reactstrap';

const Dashboard = (props) => (
  <>
    <Container>
      <div>
        {
          props.isAuthenticated ?
            <Link to="/create">Add Item</Link>
            : <h4 className="mb-3 ml-4">Please log in to manage items</h4>
        }
      </div>
    </Container>
    <ItemList />
  </>
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Dashboard);