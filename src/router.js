import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { App, TestPage } from "./pages/output";

const routerArr = [
  { path: '/', component: TestPage }
]

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Switch>
          {routerArr.map((item, i) => (
            <Route key={i} path={item.path} exact component={item.component} />
          ))}
        </Switch>
      </App>
    </Router>
  );
}

export default RouterConfig;
