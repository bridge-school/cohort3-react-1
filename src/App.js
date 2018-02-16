import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/header';
import data from './data.json';
import { AverageAge } from './Components/average-age';
import { FriendsList } from './Components/friends-list';
import { BestFriendsList } from './Components/best-friends-list';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Friends List</Header>
        <AverageAge data={ data }/>
        <FriendsList data={ data }/>
        <BestFriendsList data={ data }/>
      </div>
    );
  }
}

export default App;
