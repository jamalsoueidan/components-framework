import React, {Component} from "react"
import { connect } from "react-redux"
import { routeNodeSelector } from 'redux-router5'

import { TodoLayout, CounterLayout } from '../layouts'

class ContentLayout extends Component {
  render() {
    let layout = <div>Welcome to my application</div>
    switch(this.props.route.name) {
      case "application.todos":
        layout = <TodoLayout />
        break;
      case "application.counter":
        layout = <CounterLayout />
        break;
    }
    return(<div>{layout}</div>)
  }
}

export default connect(state => routeNodeSelector('application'))(ContentLayout)
