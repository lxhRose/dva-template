import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import {
  App,
  TestPage
} from "./pages/output";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const routerArr = [
  { path: '/', component: TestPage }
]

function RouterConfig({ history }) {
  return (
    <ConfigProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          <Route path="/" render={(props) => (
            <App>
              <Switch>
                {routerArr.map((item, i) => (
                  <Route key={i} path={item.path} exact component={item.component} />
                ))}
              </Switch>
            </App>
          )} />
        </Switch>
      </Router>
    </ConfigProvider>
  );
}

export default RouterConfig;
