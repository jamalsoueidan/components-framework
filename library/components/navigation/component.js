import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { actions } from 'redux-router5';

class Navigation extends Component {
  constructor(props, context) {
    super();
    this.router = context;
    this.items = props.items;
    this.navigate = props.navigateTo;
  }

  onclick(item) {
    console.log(item.link)
    this.navigate(item.link)
  }

  render() {
    return (
      <ul>
        <li><strong>Navigation:</strong></li>
        {this.items.map(item => (
          <li key={item.link}>
            <a onClick={this.onclick.bind(this, item)}>{item.name}</a>
          </li>
        ))}
      </ul>
    )
  }
}

Navigation.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  items: state.navigation
})

const mapDispatchToProps = (dispatch) => ({
  navigateTo: bindActionCreators(actions.navigateTo, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
