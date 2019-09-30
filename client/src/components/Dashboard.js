import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import { Container, Button } from 'reactstrap';

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
        <input
          id="search"
          type="text"
          placeholder="search"
          autoFocus
          className="text-input"
        />
        <div>
          <Button color="secondary" onClick={onSearchClick}>
            <i className="fas fa-search"></i>
          </Button>
        </div>
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