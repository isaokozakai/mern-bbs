import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import AppNavbar from '../AppNavbar';
import Dashboard from '../Dashboard';
import ItemDetail from '../ItemDetail';
import AddItem from '../AddItem';
import EditItem from '../EditItem';
import NotFound from '../NotFound';

export const history = createHistory();

const AppRouter = () => {
  const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
      <div>
        <AppNavbar />
        <Component {...props} />
      </div>
    )} />
  );

  let isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const loginUser = useSelector(state => state.auth.user ? state.auth.user.id : null);
  const createdBy = useSelector(state => state.item.item ? state.item.item.user : null);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    if (rest.edit) {
      isAuthenticated = isAuthenticated && loginUser === createdBy;
    }
    return (
      <Route {...rest} component={(props) => (
        isAuthenticated ? (
          <div>
            <AppNavbar />
            <Component {...props} />
          </div>
        ) : (
            <Redirect to="/" />
          )
      )} />
    );
  };

  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={Dashboard} exact={true} />
        <PublicRoute path="/detail/:id" component={ItemDetail} />
        <PrivateRoute path="/create" component={AddItem} />
        <PrivateRoute path="/edit/:id" component={EditItem} edit />
        <PublicRoute component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;