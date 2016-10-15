import React, { Component } from 'react';
import { Route } from 'react-router';
import { TodoLayout } from './todo_layout'

class ContentLayout extends Component {
  render() {
    console.log("content", this.props)
    return (<div>Content{this.props.children}</div>)
  }
}

export default ContentLayout;
