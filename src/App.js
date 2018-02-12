import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/header';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Hello World">!!!</Header>
      </div>
    );
  }
}

export default App;
