import React from "react"
import { ApplicationNavigation } from "../components"

const ApplicationLayout = (props) => (
  <div>
    <ApplicationNavigation />
    {props.children}
  </div>
)

export default ApplicationLayout
