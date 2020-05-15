import React from 'react';
import { connect } from 'dva';
import './index.less';

interface Props {
}

@connect((state) => ({

}))
class TestPage extends React.PureComponent<Props, any> {
  render() {
    return (
      <div className="normal">
        <h1 className="title">Yay! Welcome to dva!</h1>
        <div className="welcome" />
        <ul className="list">
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
      </div>
    )
  }
}

export default TestPage;
