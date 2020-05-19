import React from 'react';
import { connect } from 'dva';
import "./index.less";
import { Spin } from "antd";

interface Props {
  App?: any
}

@connect((state) => ({
  App: state.App
}))
export default class App extends React.PureComponent<Props, any> {
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
