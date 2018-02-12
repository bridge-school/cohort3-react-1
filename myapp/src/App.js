import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { H1 } from './components/header';
import { ListofFriends } from './data/ListofFriends';
import { AllFriends } from './components/AllFriends';
import { BestFriends } from './components/BestFriends';
import { AverageAgeofBestFriends } from './components/AverageAgeofBestFriends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <H1 text="Friends">Friends</H1>
        <h2>My Friends</h2>
        <p className="My-Friends">
          <AllFriends friends={ListofFriends} />
        </p>
        <h2>My Best Friends</h2>
        <p className="My-Best-Friends">
          <BestFriends friends={ListofFriends} />
        </p>
        <h2>The Average age of My Best Friends</h2>
        <p className="My-Best-Friends-Ages">
          <AverageAgeofBestFriends friends={ListofFriends} />
        </p>
      </div>
    );
  }
}

export default App;
