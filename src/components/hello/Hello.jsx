import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react';

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
      console.log(this.props); // props undefined unless you bind
  }
  render() {
    return (
      <div>
        Props: <div>{this.props.name}</div>
        State: <div>{this.state.name}</div>
        <Segment>
            <Button color='red' onClick={this.handleClick}>Red</Button>
        </Segment>

      </div>
    )
  }
}
