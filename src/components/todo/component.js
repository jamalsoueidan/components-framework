import React, { Component } from 'react';
import { connect } from 'react-redux'
import Form from './form/component'
import List from './list/component'
import Filter from './filter/component'
import {remove, toggle} from './actions'

const style = {
  border: "1px red solid",
  padding: "10px"
}

/* ONLY the parent component TODO should have access to redux, the nested component should get all the data
   through props! less component<>redux! */

const Todo = ({items, visible, onRemove, onToggle}) => {
  const events = { onRemove, onToggle }

  if ( visible === "completed"  ) {
    items = items.filter(e => e.completed === true)
  }

  return (
    <div style={style}>
      <Form />
      <List events={events} items={items} />
      <Filter filterBy="all">All</Filter> -
      <Filter filterBy="completed">Completed</Filter>
    </div>
  )
}

const mapStateToProps = (state) => ({
  items: state.list, visible: state.filterBy
})

const mapDispatchToProps = {
  onRemove: remove,
  onToggle: toggle
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
