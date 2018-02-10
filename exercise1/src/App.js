import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const data = [
      {
        "first": "Heath",
        "last": "Richmond",
        "age": 27,
        "isBestFriend": true
      },
      {
        "first": "Cox",
        "last": "Estrada",
        "age": 27,
        "isBestFriend": true
      },
      {
        "first": "Norma",
        "last": "Mccoy",
        "age": 35,
        "isBestFriend": false
      },
      {
        "first": "Wallace",
        "last": "Montoya",
        "age": 27,
        "isBestFriend": false
      },
      {
        "first": "Concepcion",
        "last": "Mccarthy",
        "age": 22,
        "isBestFriend": true
      },
      {
        "first": "Albert",
        "last": "Wade",
        "age": 25,
        "isBestFriend": true
      },
      {
        "first": "Sykes",
        "last": "Gonzalez",
        "age": 29,
        "isBestFriend": false
      },
      {
        "first": "Alisa",
        "last": "Ryan",
        "age": 30,
        "isBestFriend": true
      },
      {
        "first": "Holmes",
        "last": "Bright",
        "age": 28,
        "isBestFriend": false
      },
      {
        "first": "Estrada",
        "last": "Pittman",
        "age": 25,
        "isBestFriend": false
      }
    ]

    const getNames = (array) => {
      return array.map(({ first, last }) => {
        let name = first ? `${first}` : '';
        name += last ? ` ${last}` : '';
        return name;
      })
    };

    const friendNames = getNames(data);
    console.log(friendNames);

    const bestFriends = data.filter(({ isBestFriend }) => isBestFriend);
    console.log(bestFriends);

    const bestFriendsNames = getNames(bestFriends);
    console.log(bestFriendsNames);

    const bestFriendsAverageAge = bestFriends.reduce((accum, curr) => accum += curr.age, 0) / bestFriends.length;
    console.log(bestFriendsAverageAge);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
