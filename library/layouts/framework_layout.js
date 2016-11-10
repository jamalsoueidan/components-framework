import React, {Component} from "react"
import { connect } from "react-redux"
import { routeNodeSelector } from 'redux-router5'
import { LoginLayout } from './index'

class FrameworkLayout extends Component {
  render() {
    let { route, children } = this.props;

    if (route.name === "login") {
      return <LoginLayout />
    }

    return (<div>{children}</div>)
  }
}

export default connect((state) => routeNodeSelector(''))(FrameworkLayout);
