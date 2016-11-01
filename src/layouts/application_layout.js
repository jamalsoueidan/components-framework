import "../theme/application.scss"

import React from "react"
import { connect } from "react-redux"
import { routeNodeSelector } from 'redux-router5';
import { ApplicationNavigation, SystemBar } from "../components"
import BEM from '../core/bem'

const b = BEM.with('KAF-block');

const ApplicationLayout = (props) => {
  const { route } = props;
  return (
    <div className="KAF">
      <SystemBar />
      <ApplicationNavigation />
      <div className={b("content")}>
        {props.children}
      </div>
    </div>
  )
}

export default connect((state) => routeNodeSelector(''))(ApplicationLayout);
