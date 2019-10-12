import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <canvas id="canvas" width="350" height="700" onTouchStart={() => console.log('start')}></canvas>
    )
  }
}

export default App;