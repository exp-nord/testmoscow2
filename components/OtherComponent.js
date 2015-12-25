import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class OtherComponent extends React.Component {
  render(){
    return (<div className="custom-row-card">
      <div className="name"><strong><a onClick={this.props.onFilterName}>{this.props.data.name}</a></strong>
        <small><a onClick={this.props.onFilterCompany}>{this.props.data.company}</a></small>
      </div>
      <div><a onClick={this.props.onFilterCity}>{this.props.data.city}</a></div>
      <div><a onClick={this.props.onFilterState}>{this.props.data.state}</a>,
        <a onClick={this.props.onFilterCountry}>{this.props.data.country}</a></div>
    </div>);
  }
};
