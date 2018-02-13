import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from './components/list.js';
import { BestFriend } from './components/bestFriend.js';
import { Average } from './components/average.js';
import { FriendList } from './components/friendList.js'


class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>My list of friends</h2>
        <List data={ FriendList }/>
        <h2>My list of best friends</h2>
        <BestFriend data={ FriendList }/>
        <h2>Average age of my friends</h2>
        <Average data={ FriendList }/>
      </div>
    );
  }
}

export default App;
