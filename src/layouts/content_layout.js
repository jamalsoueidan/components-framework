import React, {Component} from "react"
import { connect } from "react-redux"
import { routeNodeSelector } from 'redux-router5'


class ContentLayout extends Component {
  render() {
    return(<div>{this.props.route.name}</div>)
  }
}

export default connect(state => routeNodeSelector('application'))(ContentLayout)
