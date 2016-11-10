import React, { Component } from 'react'
import { remove, toggle, add, setFilter } from './actions'
import { connect } from "react-redux"
import { List, Form, Filter } from "./components"

/* Only the Root component should have update notification from Redux */
/* The nested component should only receive what they need from the Root component */

class Todo extends Component {
  render() {
    return (
      <div>
        <Form add={this.props.add} />
        <List {...this.props} />
        <Filter currentFilter={this.props.filter} setFilter={this.props.setFilter} />
      </div>
    )
  }
}

const filterItemsByFilterValue = (items, filter) => {
  if(filter!=='all') {
    return items.filter((item) => {
      if(filter==='completed' && item.completed) {
        return item;
      }
      if(filter==='active' && !item.completed) {
        return item;
      }
    })
  }
  return items;
}

const mapStateToProps = (state) => ({
  filter: state.todo.filter,
  items: filterItemsByFilterValue(state.todo.items, state.todo.filter)
})

const mapDispatchToProps = {
  remove,
  toggle,
  add,
  setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
