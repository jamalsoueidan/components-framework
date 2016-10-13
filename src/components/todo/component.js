import React, { Component } from 'react';
import Form from './form/component'
import List from './list/component'
import Filter from './filter/component'

const style = {
  border: "1px red solid",
  padding: "10px"
}
/*
  ONLY the parent component TODO should have access to redux, the nested component should get all the data
  through props! less component<>redux!
 */
const Todo = () => (
  <div style={style}>
    <Form />
    <List />
    <Filter filterBy="all">All</Filter> -
    <Filter filterBy="completed">Completed</Filter>
  </div>
)

export default Todo
