import React, { Component } from 'react';
import logo from './logo.svg';
import TicTacToe from './containers/TicTacToe';
import ResetGame from './containers/ResetGame';
// import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <ResetGame />

          <TicTacToe />
        </div>
    );
  }
}

export default App;
