import React, { useEffect } from 'react';
import AppRouter from './components/router/AppRouter';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
