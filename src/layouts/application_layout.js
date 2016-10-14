import React, { Component } from 'react';
import { Todo, Navigation } from '../components'

const ApplicationLayout = (props) => {
  return (<div>
    <Navigation />
    {props.children}
  </div>)
}

export default ApplicationLayout
