import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class OtherFilter extends React.Component {
  render(){
    return (
      <div><a onClick={this.props.clearFilter}>ClearFilter</a></div>
    );
  }
  componentDidUpdate(){
    if (this.props.xe)
      this.props.changeFilter(this.props.text.reducer);
  }
};
