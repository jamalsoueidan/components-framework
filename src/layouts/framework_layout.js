import React, {Component} from "react"
import { connect } from "react-redux"
import { routeNodeSelector } from 'redux-router5'
import { LoginLayout } from './index'

class FrameworkLayout extends Component {
  render() {
    let { route, children } = this.props;
    console.log(route)
    if (route.name === "login") {
      return <LoginLayout />
    }

    return children
  }
}

export default connect((state) => routeNodeSelector(''))(FrameworkLayout);
