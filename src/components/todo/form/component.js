import React from "react"
import { connect } from "react-redux"
import { add } from "../actions"

require("./style.scss")
/*
  Should this component have access to LIST COMPONENT actions(api)
  or should the parent component have the responsiblilty to assign
  LIST COMPONENT actions(api) through props to this component?

  > this component notify about the new todo!
*/

class Form extends React.Component {
  onSubmit(e) {
    e.preventDefault()
    let input = this.refs.text
    this.props.addTodo(input.value)
    input.value = ""
  }

  render() {
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" ref="text" />
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (value) => {
      dispatch(add(value))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Form)
