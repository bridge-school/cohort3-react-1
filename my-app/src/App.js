import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';
import BestFriends from './components/Best-Friends';
import TextInput from './components/Text-Input';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      myFriends: [
        {
          "first": "Heath",
          "last": "Richmond",
          "age": 27,
          "isBestFriend": true
        },
        {
          "first": "Cox",
          "last": "Estrada",
          "age": 27,
          "isBestFriend": true
        },
        {
          "first": "Norma",
          "last": "Mccoy",
          "age": 35,
          "isBestFriend": false
        },
        {
          "first": "Wallace",
          "last": "Montoya",
          "age": 27,
          "isBestFriend": false
        },
        {
          "first": "Concepcion",
          "last": "Mccarthy",
          "age": 22,
          "isBestFriend": true
        },
        {
          "first": "Albert",
          "last": "Wade",
          "age": 25,
          "isBestFriend": true
        },
        {
          "first": "Sykes",
          "last": "Gonzalez",
          "age": 29,
          "isBestFriend": false
        },
        {
          "first": "Alisa",
          "last": "Ryan",
          "age": 30,
          "isBestFriend": true
        },
        {
          "first": "Holmes",
          "last": "Bright",
          "age": 28,
          "isBestFriend": false
        },
        {
          "first": "Estrada",
          "last": "Pittman",
          "age": 25,
          "isBestFriend": false
        }
      ],
      searchTerm: '',
    };
  }

  getBestFriends = () => this.state.myFriends.filter((friend) => friend.isBestFriend);

  getAverageAgeOfBestFriends = () => this.getBestFriends().reduce((acc, curr, index, array) => { 
    return acc + curr.age / array.length;
  }, 0);  

  updateSearchTerm = (event) => this.setState({ searchTerm: event.target.value});

  filterList = (list, term) => list.filter(friend =>
    friend.first.toLowerCase().includes(term.toLowerCase())
  );

  render() {
    return (
      <div className="friends"> 
        <Friends friendsList={ this.filterList(this.state.myFriends, this.state.searchTerm) }/>
        <BestFriends bestFriends={ this.getBestFriends() } />
        <p>Average age of my best friends: { this.getAverageAgeOfBestFriends().toFixed(0) } </p>
        <p>Filter friend list by first name: <br /><TextInput onChange={this.updateSearchTerm} /></p>
      </div>
    );
  }
}

export default App;
