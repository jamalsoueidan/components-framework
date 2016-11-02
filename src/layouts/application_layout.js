import "../theme/application.scss"

import React, {Component} from "react"
import { connect } from "react-redux"
import { routeNodeSelector } from 'redux-router5';
import { Navigation, Login } from "../components"
import BEM from '../core/bem'

const b = BEM.with('KAF-block');



class ApplicationLayout extends Component {
  render() {
    let { route, children } = this.props;

    if (route.name === "home") {
      children = <Login />
    }

    let style = {
      border: "3px solid black",
      padding: "5px",
    }

    return (
      <div className="KAF">
        <h1>Application</h1>
        <Navigation />
        <div className={b("content")} style={style}>
          {children}
        </div>
      </div>
    )
  }
}

export default connect((state) => routeNodeSelector(''))(ApplicationLayout);
