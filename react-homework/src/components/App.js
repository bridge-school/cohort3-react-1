import React, { Component } from 'react';
import '../styles/App.css';
import { friendList } from '../constants.js';
import { FriendsList } from './FriendsList.js';
import { AverageAge } from './AverageAge.js';
import { InputField } from './InputField.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: friendList
    };
  }

  filterFriends = input => {
    let newFriendList = friendList.filter(friend => {
      const name = friend.first + friend.last;
      return name.toLowerCase().includes(input);
    });
    this.setState({ friends: newFriendList });
  };

  render() {
    const bestFriends = this.state.friends.filter(
      friend => friend.isBestFriend
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">First React Assignment</h1>
        </header>
        <InputField filterFriends={this.filterFriends} />
        <div className="lists">
          <FriendsList friendList={this.state.friends} />
          <FriendsList bestFriends={bestFriends} />
          <AverageAge bestFriends={bestFriends} />
        </div>
      </div>
    );
  }
}

export default App;
