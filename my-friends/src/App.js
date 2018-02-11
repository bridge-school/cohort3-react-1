import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FriendList } from './data/ListOfFriends.js'
import { MyFriends } from './components/AllMyFriends.js'
import { MyBestFriends } from './components/MyBestFriends.js'
import { AverageAgeBestFriends } from './components/AverageAgeBestFriends.js'
import { HeaderBar } from './components/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar logo={logo} />
        <p>All my friends:</p>
        <MyFriends friendList={FriendList} />
        <hr />
        <p>My best friends:</p>
        <MyBestFriends friendList={FriendList} />
        <hr />
        <p>Average age of my best friends:</p>
        <AverageAgeBestFriends friendList={FriendList} />
      </div>
    );
  }
}

export default App;
