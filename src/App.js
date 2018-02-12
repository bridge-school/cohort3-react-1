import React, { Component } from 'react';
import AllFriends from './components/all-friends.js';
import BestFriends from './components/best-friends.js';
import AverageAge from './components/average-age.js';
import Friend_array from './components/data.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Friend List</h1>
        </header>
        <section className="mainData">
          <div className="listContainer">
            <h2>All Friends</h2>
            <AllFriends data={Friend_array}/>
          </div>
          <div className="listContainer">
            <h2>Best Friends</h2>
            <BestFriends data={Friend_array}/>
          </div>
          <div className="listContainer clearBoth">
            <h2>Average Age</h2>
            <AverageAge data={Friend_array}/>
          </div> 
        </section>
      </div>   
    );
  }
}


export default App;
