import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FriendList } from './data/ListOfFriends.js'
import { MyFriends } from './components/AllMyFriends.js'
import { MyBestFriends } from './components/MyBestFriends.js'
import { AverageAgeBestFriends } from './components/AverageAgeBestFriends.js'
import { HeaderBar } from './components/Header.js'
import DynamicList from './components/DynamicList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar logo={logo} />
        <div className="My-body">
          <p className="My-title">All my friends</p>
          <MyFriends friendList={FriendList} />
          <hr />
          <p className="My-title">My best friends</p>
          <MyBestFriends friendList={FriendList} />
          <hr />
          <p className="My-title">Average age of my best friends</p>
          <AverageAgeBestFriends friendList={FriendList} />
          <hr />
          <p className="My-title">Exercise in class 06 - dynamic list:</p>
          <ul>{ FriendList.map( eachFriend => <li><DynamicList first={eachFriend.first} last={eachFriend.last} age={eachFriend.age } /></li>) }</ul>
        </div>
      </div>
    );
  }
}

export default App;
