import React from "react"

// XSS - not checked
const NoMatchLayout = ({location}) => (
  <div>
    Route not found<br />
    <strong>{location.pathname}</strong>
  </div>
)

export default NoMatchLayout
