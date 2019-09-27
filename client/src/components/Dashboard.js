import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import { Container, Button } from 'reactstrap';

const Dashboard = (props) => (
  <>
    <Container className="mb-2">
      {
        props.isAuthenticated ?
          <Link to="/create">
            <Button color="secondary">
              Add Item
            </Button>
          </Link>
          : <h4>Please log in to manage items</h4>
      }
      {/* <form className="form" onSubmit={onSubmit}>
        {error && <p className="form__error">{error}</p>}
        <input
          type="text"
          placeholder="Title"
          autoFocus
          className="text-input"
          value={title}
        /> */}
        <div>
          <Button color="secondary">
            <i class="fas fa-search"></i>
          </Button>
        </div>
      {/* </form> */}
    </Container>
    <ItemList />
  </>
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Dashboard);