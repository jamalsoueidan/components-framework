import React, { Component } from "react"
import { connect } from "react-redux"
import Form from "./form/component"
import List from "./list/component"
import Filter from "./filter/component"
import {remove, toggle, fetch} from "./actions"
import { routeNodeSelector } from 'redux-router5';

const style = {
  border: "1px red solid",
  padding: "10px"
}

/* ONLY the parent component TODO should have access to redux, the nested component should get all the data
   through props! less component<>redux! */

class Todo extends Component {
  constructor(props) {
    super(props)
    this.loaded = false;
    console.log(Todo.name)
  }

  componentWillMount() {
    if (!this.loaded) {
      this.props.onFetch();
      this.loaded = true;
    }
  }

  render() {
    let {items, visible, onRemove, onToggle, onFetch} = this.props

    if ( visible === "completed" ) {
      items = items.filter(e => e.completed === true)
    }

    return (
      <div style={style}>
        <Form />
        <List events={ onRemove, onToggle } items={items} />
        <Filter filterBy="all">All</Filter> -
        <Filter filterBy="completed">Completed</Filter>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const selector = routeNodeSelector('application.todos');

  return {
    items: state.list,
    visible: state.filterBy,
    ...selector
  }
}

const mapDispatchToProps = {
  onRemove: remove,
  onToggle: toggle,
  onFetch: fetch
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
