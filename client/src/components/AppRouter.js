import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from './Dashboard';
import ItemContent from './ItemContent';
import AddItem from './AddItem';
import EditItem from './EditItem';
import NotFound from './NotFound';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/content/:id" component={ItemContent} />
        <Route path="/create" component={AddItem} />
        <Route path="/edit/:id" component={EditItem} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;