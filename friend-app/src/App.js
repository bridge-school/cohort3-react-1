import React, { Component } from "react";
import "./App.css";
import { FriendList } from "./components/friendList";
import { BestFriendList } from "./components/bestFriendList";
import { AverageAge } from "./components/averageAge";
import { friends } from "./data.js";

export const extendedPersonList = friends.map(person => ({
  ...person,
  fullName: `${person.first} ${person.last}`,
  id: `${person.age} ${person.name}`
}));
class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendList data={extendedPersonList} />
        <BestFriendList data={extendedPersonList} />
        <AverageAge data={extendedPersonList} />
      </div>
    );
  }
}

export default App;
