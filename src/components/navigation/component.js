import React, { Component } from 'react'
import { connect } from 'react-redux'

const Navigation = ({items}) => (
  <ul>
    <li>Navigation:</li>
    {items.map(item => <li key={item.link}>{item.name}</li>)}
  </ul>
)

const mapStateToProps = (state) => ({
  items: state.navigation
})


export default connect(mapStateToProps)(Navigation)
