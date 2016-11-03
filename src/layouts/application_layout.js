import "../theme/application.scss"

import React, {Component} from "react"
import { Navigation, Login } from "../components"
import BEM from '../core/bem'

const b = BEM.with('KAF-block');

class ApplicationLayout extends Component {
  render() {
    let { children } = this.props;

    let style = {
      border: "3px solid black",
      marginTop: "10px",
      padding: "5px"
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

export default ApplicationLayout;
