import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/header';
import data from './data.json';
import { AverageAge } from './Components/average-age';
import { FriendsList } from './Components/friends-list';
import { BestFriendsList } from './Components/best-friends-list';
import FriendCard from "./FriendCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showHeader: true
    }
  }

  toggleHeader = () => {
    this.setState({ showHeader: !this.state.showHeader });
  };
  
  render() {
    return (
      <div className="App">
        <div>
          {this.state.showHeader && <h1>Header!</h1>}
          Body Text
          <button onClick={this.toggleHeader}>Toggle</button>
        </div>
        <Header>Friends List</Header>
        <AverageAge data={ data }/>
        <FriendsList data={ data }/>
        <BestFriendsList data={ data }/>
        <ul>
          {data.map(friend => (
            <li>
              <FriendCard {...friend} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
