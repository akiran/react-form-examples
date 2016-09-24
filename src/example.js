import React, { Component } from 'react'

export default class Example extends Component {
  render() {
    return (
      <div style={{paddingTop: 100}}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
