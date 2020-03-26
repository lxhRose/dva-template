import React from 'react';
import { connect } from 'dva';
import "./index.less";
import { Spin } from "antd";

@connect((state) => ({
  App: state.App
}))
export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { loading } = this.props.App;

    return (
      <div className="app">
        {this.props.children}
        {loading &&
          <Spin className="spin" />
        }
      </div>
    )
  }
}
