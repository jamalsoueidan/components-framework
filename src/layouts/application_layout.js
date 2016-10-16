import React from "react"
import { Navigation } from "../components"

const ApplicationLayout = (props) => (
  <div>
    <Navigation />
    {props.children}
  </div>
)

export default ApplicationLayout
