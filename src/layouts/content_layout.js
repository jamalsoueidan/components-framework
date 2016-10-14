import React, { Component } from 'react';

class ContentLayout extends Component {
  render() {
    console.log(this.props.children)
    return (this.props.children)
  }
}

export default ContentLayout;
