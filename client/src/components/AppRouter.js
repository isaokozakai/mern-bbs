import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AppNavbar from './AppNavbar';
import Dashboard from './Dashboard';
import ItemContent from './ItemContent';
import AddItem from './AddItem';
import EditItem from './EditItem';
import NotFound from './NotFound';

export const history = createHistory();

const AppRouter = () => {
  const PublicRoute = ({
    component: Component,
    ...rest }) => (
      <Route {...rest} component={(props) => (
        <div>
          <AppNavbar />
          <Component {...props} />
        </div>
      )} />
    );

  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={Dashboard} exact={true} />
          <PublicRoute path="/content/:id" component={ItemContent} />
          <PublicRoute path="/create" component={AddItem} />
          <PublicRoute path="/edit/:id" component={EditItem} />
          <PublicRoute component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
};

export default AppRouter;