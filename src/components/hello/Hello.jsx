import React, { Component } from 'react'

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe"
    }
  }
  render() {
    return (
      <div>
        Props: <div>{this.props.name}</div>
        State: <div>{this.state.name}</div>
      </div>
    )
  }
}
