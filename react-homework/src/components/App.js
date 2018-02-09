import React, { Component } from 'react';
import '../styles/App.css';
import { friendList } from '../constants.js';
import { Friends } from './Friends.js';
import { BestFriends } from './BestFriends.js';
import { AverageAge } from './AverageAge.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">First React Assignment</h1>
        </header>
        <div className="lists">
          <Friends friendList={friendList} />
          <BestFriends friendList={friendList} />
          <AverageAge friendList={friendList} />
        </div>
      </div>
    );
  }
}

export default App;
