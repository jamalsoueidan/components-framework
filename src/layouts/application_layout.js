import "../theme/application.scss"

import React from "react"
import { ApplicationNavigation } from "../components"
import BEM from '../core/bem'

const b = BEM.with('KAF-block');

const ApplicationLayout = (props) => (
  <div>
    <ApplicationNavigation />
    <div className={b("content")}>
      {props.children}
    </div>
  </div>
)

export default ApplicationLayout
