import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/header';
import { List} from './Components/list';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Hello World">!!!</Header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List data={[1,2,3,4]} />
      </div>
    );
  }
}

export default App;
