import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { H1 } from './components/header';
import { List } from './components/list';

class App extends Component {
  render() {
    const people = [
      {
        first: 'Heath',
        last: 'Richmond',
        age: 27,
        isBestFriend: true,
      },
      {
        first: 'Cox',
        last: 'Estrada',
        age: 27,
        isBestFriend: true,
      },
      {
        first: 'Norma',
        last: 'Mccoy',
        age: 35,
        isBestFriend: false,
      },
      {
        first: 'Wallace',
        last: 'Montoya',
        age: 27,
        isBestFriend: false,
      },
      {
        first: 'Concepcion',
        last: 'Mccarthy',
        age: 22,
        isBestFriend: true,
      },
      {
        first: 'Albert',
        last: 'Wade',
        age: 25,
        isBestFriend: true,
      },
      {
        first: 'Sykes',
        last: 'Gonzalez',
        age: 29,
        isBestFriend: false,
      },
      {
        first: 'Alisa',
        last: 'Ryan',
        age: 30,
        isBestFriend: true,
      },
      {
        first: 'Holmes',
        last: 'Bright',
        age: 28,
        isBestFriend: false,
      },
      {
        first: 'Estrada',
        last: 'Pittman',
        age: 25,
        isBestFriend: false,
      },
    ];
    return (
      <div>
        <H1>hello words!!</H1>
        <List data={[1, 2, 3, 4]} />
      </div>
    );
  }
}

export default App;
