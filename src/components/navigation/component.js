import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"

const Navigation = ({items}) => (
  <ul>
    <li><strong>Navigation:</strong></li>
    {items.map(item => (
      <li key={item.link}>
        <Link to={item.link}>{item.name}</Link>
      </li>
    ))}
  </ul>
)

const mapStateToProps = (state) => ({
  items: state.navigation
})

export default connect(mapStateToProps)(Navigation)
