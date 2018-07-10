import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/header';
import data from './data.json';
import { AverageAge } from './Components/average-age';
import { FriendsList } from './Components/friends-list';
import { BestFriendsList } from './Components/best-friends-list';
import { SearchBar } from './Components/search-bar';
import FriendCard from "./FriendCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showHeader: true,
      query: ''
    }
  }

  handleInputChange = () => {
    this.setState({ query: this.search.value })
  }

  toggleHeader = () => {
    this.setState({ showHeader: !this.state.showHeader });
  };
  
  render() {
    let filteredFriends = data.filter(
      (friend) => {
        return friend.first.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
      }
    )
    return (
      <div className="App">
        <div>
          {this.state.showHeader && <h1>Header!</h1>}
          Body Text
          <button onClick={this.toggleHeader}>Toggle</button>
        </div>

      <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
        {/* <SearchBar /> */}
        <Header>Friends List</Header>
        
        {  filteredFriends.map((friend) =>
            <li>              
              <FriendCard {...friend} />
            </li>
          )}


        {/* <AverageAge data={ data }/> */}
        {/* <FriendsList data={ data }/> */}
        {/* <FriendsList data={ data }/> */}
        {/* <BestFriendsList data={ data }/> */}
        {/* <ul>
          {data.map(friend => (
            <li>
              <FriendCard {...friend} />
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default App;
