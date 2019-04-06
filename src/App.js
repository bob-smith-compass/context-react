import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ColorButtons from './components/color-buttons/ColorButtons';
import ButtonStock from './components/button-stock/ButtonStock';
import { Segment } from 'semantic-ui-react';
// import Grid from './components/grid/Grid';

class App extends Component {
  render() {
    return (
      <Segment inverted>
        <h3>Context</h3>
        <ButtonStock />
        <ColorButtons />
        {/* <Grid /> */}
      </Segment>
    );
  }
}

export default App;
