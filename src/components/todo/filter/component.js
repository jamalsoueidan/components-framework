import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {setVisibilityFilter} from './actions'

class Filter extends Component {
  onClick(e) {
    e.preventDefault()
    this.props.changeFilter(this.props.filterBy)
  }

  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>
    }
    return(
      <a href="#" onClick={this.onClick.bind(this)}>
      {this.props.children}
      </a>
    )
  }
}

Filter.propTypes = {
  filterBy: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  active: state.filterBy === ownProps.filterBy
})

const mapDispatchToProps = {
  changeFilter: setVisibilityFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
