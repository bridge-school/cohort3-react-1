import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FriendList } from './data/ListOfFriends.js'
import { MyFriends } from './components/AllMyFriends.js'
import { MyBestFriends } from './components/MyBestFriends.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>All my friends:</p>
        <MyFriends friendList={FriendList} />
        <hr />
        <p>My best friends:</p>
        <MyBestFriends friendList={FriendList} />
        <hr />
        <p>Average age of my best friends:</p>
      </div>
    );
  }
}

export default App;
