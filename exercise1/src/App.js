import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import friends from './data/friends.json';

class App extends Component {

  getNames = (array) => {
    return array.map(({ first, last }) => {
      let name = first ? `${first}` : '';
      name += last ? ` ${last}` : '';
      return name;
    })
  };

  render() {

    const friendNames = this.getNames(friends);
    // console.log(friendNames);

    const bestFriends = friends.filter(({ isBestFriend }) => isBestFriend);
    // console.log(bestFriends);

    const bestFriendsNames = this.getNames(bestFriends);
    // console.log(bestFriendsNames);

    const bestFriendsAverageAge = bestFriends.reduce((accum, curr) => accum += curr.age, 0) / bestFriends.length;
    // console.log(bestFriendsAverageAge);

    return (
      <div className="App">
        <List name="Friends" data={friendNames} />
        <List name="Best Friends" data={bestFriendsNames} summary={`Average age: ${bestFriendsAverageAge}`}></List>
      </div>
    );
  }
}

export default App;
