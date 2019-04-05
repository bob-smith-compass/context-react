import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ColorButtons from './components/color-buttons/ColorButtons';

class App extends Component {
  render() {
    return (
      <div>
        <h3>Context</h3>
        <ColorButtons />
      </div>
    );
  }
}

export default App;
