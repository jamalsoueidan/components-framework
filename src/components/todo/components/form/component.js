import React from "react"

class Form extends React.Component {
  handleSubmit(evt) {
    evt.preventDefault()
    let input = this.refs.text
    this.props.add(input.value)
    input.value = ""
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="text" />
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

export default Form
