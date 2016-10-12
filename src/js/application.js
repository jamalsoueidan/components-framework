import React, { Component } from 'react';
import { Filter, List, Form } from './components'

const Application = () => (
  <div>
    <Form />
    <List />
    <Filter filterBy="all">All</Filter> -
    <Filter filterBy="completed">Completed</Filter>
  </div>
)

export default Application
