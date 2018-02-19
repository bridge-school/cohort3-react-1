import React, { Component } from 'react';
import './App.css';
import FilterableList from './components/FilterableList';
import friends from './data/friends.json';

class App extends Component {
  render() {

    const bestFriends = friends.filter(({ isBestFriend }) => isBestFriend);
    console.log(bestFriends);

    const bestFriendsAverageAge = bestFriends.reduce((accum, curr) => accum += curr.age, 0) / bestFriends.length;
    console.log(bestFriendsAverageAge);

    return (
      <div className="App">
        <FilterableList name="Friends" data={friends} />
        <FilterableList name="Best Friends" data={bestFriends} summary={`Average age: ${bestFriendsAverageAge}`} />
      </div>
    );
  }
}

export default App;
