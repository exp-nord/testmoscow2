import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Griddle from 'griddle-react'
import OtherComponent from './OtherComponent'
import OtherFilter from './OtherFilter'

export default class App extends React.Component {
  render(){
    return <div>
      <Griddle results={this.props.data}
        showFilter={true}
        useCustomRowComponent={true}
        customRowComponent={OtherComponent}
        useCustomFilterComponent={true}
        customFilterComponent={OtherFilter}/>
    </div>;
  }
}