import React, { Component } from 'react'

class Filter extends Component {
  click(filter, evt) {
    evt.preventDefault();
    this.props.setFilter(filter)
  }

  render() {
    return (<div>
        <a href="#" onClick={this.click.bind(this, 'all')}>All</a> -
        <a href="#" onClick={this.click.bind(this, 'active')}>Active</a> -
        <a href="#" onClick={this.click.bind(this, 'completed')}>Completed</a>
    </div>)
  }
}

export default Filter;
